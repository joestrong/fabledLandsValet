import {
  ADD_ITEM,
  REMOVE_ITEM,
  SWAP_ITEM_COLLECTION,
  ADD_STASH,
  DELETE_STASH,
} from '../actions';


const initialState = {
  personal: {
    items: [
      {
        name: 'Wooden Sword',
        key: 'Wooden Sword-0000',
        effects: [
          { skill: 'combat', value: 1 },
        ]
      },
    ]
  },
  Bank: {
    shards: 0,
    items: []
  },
  Invested: {
    shards: 0,
    items: []
  },
};

export default function possessions(state = initialState, action) {
  switch (action.type) {

    case ADD_ITEM:
      return {
        ...state,
        personal: {
          items: [...state.personal.items, action.item],
        }
      };

    case REMOVE_ITEM: {
      const { items } = state.personal;
      return {
        ...state,
        personal: {
          items: [
            ...items.slice(0, action.index),
            ...items.slice(action.index + 1),
          ],
        }
      };
    }

    case SWAP_ITEM_COLLECTION: {
      const { itemIndex, currentCol, newCol } = action;
      const newState = { ...state };

      newState[newCol].items.push(newState[currentCol].items[itemIndex]);
      newState[currentCol].items = [
        ...newState[currentCol].items.slice(0, itemIndex),
        ...newState[currentCol].items.slice(itemIndex + 1),
      ];
      return newState;
    }

    case ADD_STASH:
      return {
        ...state,
        [action.name]: {
          shards: 0,
          items: []
        }
      };

    case DELETE_STASH: {
      const newState = { ...state };
      delete newState[action.name];
      return newState;
    }

    default:
      return state;
  }
}

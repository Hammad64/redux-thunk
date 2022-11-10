import { ITEM_ADD, ITEM_REMOVE,ADD_QUANTITY,REMOVE_QUANTITY,ALL_ITEMS_REMOVED} from "./itemTypes";

const initialState = {
  counter: 0,
  items: [],
  total:0
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_ADD:
      const itemm = state.items.find((item) => item.id === action.payload.id);
      if (itemm) {
        state.items.map((item) => {
          if (item.id === itemm.id) {
            item.quantity += 1;
          }
        });

        return {
          ...state,
          total:state.total+action.payload.price
        };
      } else {
        return {
          ...state,
          counter: state.counter + 1,
          items: [...state.items, action.payload],
          total:state.total+action.payload.price
          
        };
      }

    case ITEM_REMOVE:
      const newItem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        counter: state.counter - 1,
        items: newItem,
        total:state.total-action.payload.quantity*action.payload.price
      };
     
    case ADD_QUANTITY:
        state.items.filter((item) => {
            if (item.id === action.payload.id) {
              item.quantity += 1;
          
            }
          });
          return {
            ...state,
            total:state.total+action.payload.price
          }
    
    case REMOVE_QUANTITY:
      state.items.filter((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= 1;
        }
      });
      return {
        ...state,
        total:state.total-action.payload.price
      }
    
    case ALL_ITEMS_REMOVED:
      return {
        items:[],
        total:0,
        counter:0
      }
    default:
      return state;
  }
};

export default itemReducer;

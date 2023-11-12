import { ADD_USER } from '../actions/action';
import { UPDATE_USER } from '../actions/action';


// Initial state
const initialState = {
  user: {},
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(action.payLoad);
      return {
        ...state,
        user: action.payLoad,
      };
      case UPDATE_USER:
        console.log(action.payLoad);
        return{
          ...state,
          user: action.payLoad
        }
    default:
      return state;
  }
};

export default reducer;





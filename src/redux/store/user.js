import { ADD_USER } from '../actions/action';
import { UPDATE_USER } from '../actions/action';


// Initial state
const initialState = {
  currentUser: {
    userId: "נעמה",
    dateBirth: "1.8.2000",
    city: "pt",
    str: "tkjf",
    numStr: "545",
    status: true,
    aboutMe: "fsdfs",
    lessonPlace: "home",
  },
  // currentUser: {},
  allUsers: [],
  user: {},
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      state.currentUser = action.payLoad;
      break;
    case "SET_ALL_USERS":
      state.allUsers = action.payLoad;
      break;

    // case "UPDATE_USER":
    //   state.cu = action.payLoad;
    //   break;
    // case "DELETE_USER":
    //   state.user.filter( index => index.userName !== action.payload.userName);
    //   break;
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


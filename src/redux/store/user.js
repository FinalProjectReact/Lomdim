import { produce } from "immer";

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
};

const reducer = produce((state, action) => {
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
    default:
      break;
  }
}, initialState);

export default reducer;

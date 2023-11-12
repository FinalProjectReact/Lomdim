import { SET_ALL_CATEGORY } from '../actions/categoryAction';

const initialState = {
  category: [],
};

const reducer =(state=initialState, action) => {
  switch (action.type) {
    case SET_ALL_CATEGORY:
      state.category = action.payLoad;
      break;
    case "DELETE_CATEGOTY":
      state.category.filter((index) => index.name !== action.payload.name);
      break;
    default: return state;
  }
};

export default reducer;

// actionTypes.js
export const SET_ALL_CATEGORY = 'SET_ALL_CATEGORY';

// actions.js
export const setAllCategories = (category) => {
  return (dispatch) => {
    dispatch({
      type: SET_ALL_CATEGORY,
      payload: category,
    });
  };
};
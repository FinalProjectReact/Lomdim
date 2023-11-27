// actionTypes.js
export const ADD_USER = 'ADD_USER';

// actions.js
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};


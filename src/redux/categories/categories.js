// action types
const CHECK_STATUS = 'categories/categories/CHECK_STATUS';
const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// action creators
export const checkStatus = () => (dispatch) => {
  dispatch({
    type: CHECK_STATUS,
  });
};

export default reducer;

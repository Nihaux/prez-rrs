function articleReducer(state, action) {

  switch(action.type) {

    case ADD_CATEGORY_FILTER:
       const newState = { ...state };
       newState.filters.categories = action.category;
       return newState;
  }

  return state;
}

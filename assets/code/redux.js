const initialState = {
  categories: [
    { id: 1, title: 'Télévision' },
    { id: 2, title: 'Cinéma' },
  ],
  articles: [
    { id: 1, title: 'vous ne devinerez', category: 1 },
    { id: 2, title: 'Decouvrez les', category: 2 },
    { id: 3, title: 'Decouvrez les 2', category: 1 },
  ],
  filters: {
    categories: [],
  },
};

const ADD_CATEGORY_FILTER = 'ADD_CATEGORY_FILTER';

const addCategoryFilter = (category) => ({
  type: ADD_CATEGORY_FILTER,
  payload: {
    category,
  },
});

store.dispatch({
  type: ADD_CATEGORY_FILTER,
  payload: {
    category: { id: 1 },
  },
});

function articleReducer(state, action) {

  switch(action.type) {
    case ADD_CATEGORY_FILTER:
      const newState = { ...state };
      newState.filters.categories = [
        ...state.filters.categories,
        action.category
      ];
      return newState;
  }

  return state;
}

const newState = {
  categories: [
    { id: 1, title: 'Télévision' },
    { id: 2, title: 'Cinéma' },
  ],
  articles: [
    { id: 1, title: 'vous ne devinerez jamais', category: 1 },
    { id: 2, title: 'Decouvrez les', category: 2 },
    { id: 3, title: 'Decouvrez les 2', category: 1 },
  ],
  filters: {
    categories: [
      { id: 1 },
    ],
  },
};


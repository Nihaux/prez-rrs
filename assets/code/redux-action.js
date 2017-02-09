const ADD_CATEGORY_FILTER = 'ADD_CATEGORY_FILTER';

const addCategoryFilter = (category) => ({
  type: ADD_CATEGORY_FILTER,
  payload: {
    category,
  },
});
const initialState = {
  categories: [
    { id: 1, title: 'Télévision' },
    { id: 2, title: 'Cinéma' },
  ],
  articles: [
    { id: 1, title: 'vous ne devinerez jamais', body: '[...]', category: 1 },
    { id: 2, title: 'Decouvrez les nouvelles photos', body: '[...]', category: 2 },
    { id: 3, title: 'Decouvrez les nouvelles photos 2', body: '[...]', category: 1 },
  ],
  filters: {
    categories: [],
  },
};
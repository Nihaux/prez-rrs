const article = {
  id: 1,
  title: 'Vous ne devinerez jamais ce que[...]',
  author: {
    id: 4,
    name: 'Jean Bono',
    email: 'jean@gmail.com',
  },
  body: '[...]'
};

const { id, title, author: { id: authorId } } = article;

console.log(id);

console.log(title);

console.log(authorId);

console.log(author);
function* exampleGenerator() {
  yield 'somevalue';
  const toto = yield;
  console.log('in generator', toto);
}

const gen = exampleGenerator();

console.log('in prog:', gen.next().value);

gen.next('salut');


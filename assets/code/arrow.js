function hello(name) {
  console.log('hello' + name);
}

const hello = (name) => {
  console.log('hello' + name);
}

function addOne(number) {
  return number + 1;
}

const addOne = number => number + 1;

function returnJson(name) {
  return {
    name: name,
  };
}

const returnJson = name => ({ name });







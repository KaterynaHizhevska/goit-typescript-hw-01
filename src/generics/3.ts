function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const object = merge({ name: 'Kate' }, { age: 19 });
console.log(object);
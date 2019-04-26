// run in console with: yarn start

const person = {
    name: 'arku',
    age: 123,
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
    name: 'ss',
    age: 33,
};

console.debug(person);
console.debug(anotherPerson);

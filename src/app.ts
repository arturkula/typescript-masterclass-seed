// run in console with: yarn start

const person = {
    name: 'arku',
    age: 123,
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
    name: 'ss',
    age: 33,
};

console.debug(person);
console.debug(anotherPerson);
console.debug(personName);

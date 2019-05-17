// run in console with: yarn start

interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: 'arku',
    age: 33,
};

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

function freezePerson<T>(obj: T): MyReadonly<T> {
    return Object.freeze(obj);
}

const newPerson = freezePerson(person);
// newPerson.name = 'abc'; // compiler error

console.debug(person);
console.debug('readonly:', newPerson);

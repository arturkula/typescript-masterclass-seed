// run in console with: yarn start

interface IPerson {
    name: string;
    age?: number;
}

type MyRequired<T> = { -readonly [P in keyof T]-?: T[P] };

function printAge(value: Required<IPerson>) {
    return `${value.name} is ${value.age}`;
}

const person: Required<IPerson> = {
    name: 'arku',
    age: 33,
};

const age = printAge(person);

console.debug(person);
console.debug(age);

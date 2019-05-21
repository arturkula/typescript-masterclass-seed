// run in console with: yarn start

interface IPerson {
    name: string;
    age?: number;
    address: {};
}

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

const person: Pick<IPerson, 'name' | 'age'> = {
    name: 'arku',
    age: 33,
};

console.debug(person);

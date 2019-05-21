// run in console with: yarn start

interface IPerson {
    name: string;
    age: number;
}

type MyPartial<T> = { [P in keyof T]?: T[P] };

function updatePerson<T>(obj: T, prop: Partial<T>): T {
    return { ...obj, ...prop };
}

const person: IPerson = {
    name: 'arku',
    age: 33,
};

const updatedPerson = updatePerson(person, { name: 'ABC' });

console.debug(person);
console.debug(updatedPerson);

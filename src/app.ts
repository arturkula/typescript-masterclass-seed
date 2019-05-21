// run in console with: yarn start

let dictionary: Record<string, ITrackStates> = {};

interface ITrackStates {
    current: string;
    next: string;
}

const item: Record<keyof ITrackStates, string> = {
    current: 'jksdgf',
    next: 'fffdwweyy',
};

// Numbers are coerced to String
dictionary[0] = item;

console.debug(dictionary);
console.debug(dictionary[0]);

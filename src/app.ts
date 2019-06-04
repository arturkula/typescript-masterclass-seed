// run in console with: yarn start

function reverse(str: string): string;
function reverse<TItem>(arr: TItem[]): TItem[];
function reverse<TItem>(stringOrArray: string | TItem[]): string | TItem[] {
    if (typeof stringOrArray === 'string') {
        return stringOrArray
            .split('')
            .reverse()
            .join('');
    }

    return stringOrArray.slice().reverse();
}

const t = reverse('Pepperoni');
const r = reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
const z = reverse([1, 2, 3, 4, 5]);

console.debug('t:', t);
console.debug('r:', r);
console.debug('z:', z);

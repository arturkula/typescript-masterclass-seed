// run in console with: yarn start

const enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

let selectedSize: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
    selectedSize = size;
}

console.debug('selectedSize: ', selectedSize);

updateSize(Sizes.Large);

console.debug('selectedSize: ', selectedSize);

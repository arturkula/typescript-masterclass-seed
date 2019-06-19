// run in console with: yarn start

enum Sizes {
    Small,
    Medium,
    Large,
}

enum Sizes {
    ExtraLarge = 3,
}

const selectedSize = 1;

console.debug('Sizes.Medium: ', Sizes.Medium);
console.debug('Sizes[Sizes.Large]: ', Sizes[Sizes.Large]);
console.debug('Sizes[selectedSize]: ', Sizes[selectedSize]);

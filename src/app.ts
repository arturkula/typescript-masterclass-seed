// run in console with: yarn start

interface IOrder {
    id: string;
    amount: number;
    currency: string;
}

interface IStripe {
    card: string;
    cvc: string;
}

interface IPayPal {
    email: string;
}

type CheckoutCard = IOrder & IStripe;
type CheckoutPayPal = IOrder & IPayPal;

const order: IOrder = {
    id: 'dfgwer324',
    amount: 100,
    currency: 'USD',
};

const orderCard: CheckoutCard = {
    ...order,
    card: '1233 1233 1233 1233',
    cvc: '1234',
};

const orderPayPal: CheckoutPayPal = {
    ...order,
    email: 'aasd@reew.wer',
};

// // this:
// const assigned = Object.assign({}, order, orderCard);
// // is the same as this:
// const assigned = {...order, ...orderCard};

console.debug('order:', order);
console.debug('orderCard:', orderCard);
console.debug('orderPayPal:', orderPayPal);
// console.debug('assigned:', assigned);

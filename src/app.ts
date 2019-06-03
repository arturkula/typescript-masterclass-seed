// run in console with: yarn start

interface IOrder {
    id: string;
    amount: number;
    currency: string;
}

interface IStripe {
    type: 'stripe';
    card: string;
    cvc: string;
}

interface IPayPal {
    type: 'paypal';
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
    type: 'stripe',
    card: '1233 1233 1233 1233',
    cvc: '1234',
};

const orderPayPal: CheckoutPayPal = {
    ...order,
    type: 'paypal',
    email: 'aasd@reew.wer',
};

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.debug(payload.card, payload.cvc);
    }

    if (payload.type === 'paypal') {
        console.debug(payload.email);
    }
}

console.debug('order:', order);
console.debug('orderCard:', orderCard);
console.debug('orderPayPal:', orderPayPal);

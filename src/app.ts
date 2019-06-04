// run in console with: yarn start

class Pizza {
    constructor(private name: string, private price: number) {}
}

class List<TItem> {
    private list: TItem[] = [];

    public addItem(item: TItem): void {
        this.list.push(item);
    }

    public getList(): TItem[] {
        return this.list;
    }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

const pizzas = list.getList();

class Coupon {
    constructor(private name: string) {}
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('Pepperoni15'));

console.debug('list:', list);
console.debug('pizzas:', pizzas);
console.debug('anotherList:', anotherList);

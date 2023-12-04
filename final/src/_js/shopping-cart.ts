let idCounter = 0;


interface Item {
  title: string,
  author: string,
  price: number
}

class ShoppingCart {
  _items: Map<number, Item>;

  constructor(items: Map<number, Item> = new Map()) {
    this._items = items ?? new Map<number, Item>();

    if (this._items.size > 0) {
      idCounter = Math.max(...this._items.keys()) + 1;
    }
  }

  get items() : Map<number, Item> {
    return this._items;
  }

  addItem(item: Item) : void {
    this._items.set(idCounter++, item);
  }

  removeItem(id: number) : Item | null {
    let item: Item | null = this._items.get(id) ?? null;
    this._items.delete(id)
    return item;
  }

  toJSON(): string {
    // serialize map separately as JSON would create an object from it
    const itemList: [number, Item][] = Array.from(this._items.entries());
    const serializableCart = {
        items: itemList
    };
    return JSON.stringify(serializableCart);
  }

  // Deserialize the class from its JSON representation
  static fromJSON(json: string): ShoppingCart {
      const jsonCart = JSON.parse(json);
      const itemMap = new Map<number, Item>(jsonCart.items ?? []);
      return new ShoppingCart(itemMap);
  }
}


function addToCart() {
  localStorage.clear();

  let cart: ShoppingCart = ShoppingCart.fromJSON(localStorage.getItem("cart") ?? '{}')

  console.log(cart);
  cart.addItem({ title: "Harry Po-ah", author: "No clue", price: 10.00 });
  cart.addItem({ title: "Du Sau du", author: "Me", price: 100.00 });

  cart.items.forEach((item: Item, id: number) => {
    console.log("ID: " + id);
    console.log("Item: " + item.title);
  });

  cart.removeItem(0);
  console.log(cart);

  // document.location.href = "../index.html";
}

window.onload = function() {
  Array.from(document.getElementsByClassName("to-cart-button")).forEach(element => {
    element.addEventListener("click", addToCart)
  });
};

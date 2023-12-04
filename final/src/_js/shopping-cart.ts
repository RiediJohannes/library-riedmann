let idCounter = 0;

class ShoppingCart {
  _items: Map<number, string>;

  constructor(items: Map<number, string> = new Map()) {
    this._items = items ?? new Map<number, string>();

    if (this._items.size > 0) {
      idCounter = Math.max(...this._items.keys()) + 1;
    }
  }

  get items() : Map<number, string> {
    return this._items;
  }

  addItem(item: string) : void {
    this._items.set(idCounter++, item);
  }

  toJSON(): string {
    // serialize map separately as JSON would create an object from it
    const itemList: [number, string][] = Array.from(this._items.entries());
    const serializableCart = {
        items: itemList
    };
    return JSON.stringify(serializableCart);
  }

  // Deserialize the class from its JSON representation
  static fromJSON(json: string): ShoppingCart {
      const jsonCart = JSON.parse(json);
      const itemMap = new Map<number, string>(jsonCart.items ?? []);
      return new ShoppingCart(itemMap);
  }
}


function addToCart() {
  localStorage.clear();

  if (!("cart" in localStorage)) {
    let cart = new ShoppingCart();
    localStorage.setItem("cart", cart.toJSON())
  }

  let cart: ShoppingCart = ShoppingCart.fromJSON(localStorage.getItem("cart") ?? '{}')

  console.log(cart);
  cart.addItem("Harry Po-ah");

  cart.items.forEach((item: string, id: number) => {
    console.log("ID: " + id);
    console.log("Item: " + item);
  });


  // document.location.href = "../index.html";
}

window.onload = function() {
  Array.from(document.getElementsByClassName("to-cart-button")).forEach(element => {
    element.addEventListener("click", addToCart)
  });
};

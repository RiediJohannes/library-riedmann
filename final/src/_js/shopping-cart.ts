let idCounter = 0;


interface Item {
  title: string,
  author: string,
  priceCents: number
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


function addToCart(): void {
  let cart: ShoppingCart = getCart();

  let newItem: Item = {
    title: document.getElementById("title")?.innerText ?? "Unknown title",
    author: document.getElementById("author")?.innerText ?? "Unknown author",
    priceCents: parseInt(document.getElementById("price")?.dataset.cents ?? "NaN"),
  }

  cart.addItem(newItem);

  console.log(cart);
  localStorage.setItem("cart", cart.toJSON());

  document.location.href = "../shopping-cart.html";
}

function getCart(): ShoppingCart {
  return ShoppingCart.fromJSON(localStorage.getItem("cart") ?? '{}'); 
}

function createItemRow(item: Item): HTMLElement {
  let row = document.createElement("tr")

  let imageCell = document.createElement("td");
  let figure = document.createElement("figure");
  figure.classList.add('image');
  let img = document.createElement("img");
  img.src = "assets/raster/lord_of_rings.jpg";
  img.alt = "Cover of book [" + item.title ?? "unknown" + "]";
  figure.appendChild(img);
  imageCell.appendChild(figure);
  row.appendChild(imageCell);

  let titleCell = document.createElement("td");
  titleCell.innerText = item.title;
  row.appendChild(titleCell);

  let priceCell = document.createElement("td");
  let price = item.priceCents / 100;
  priceCell.innerText = price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
  priceCell.dataset.cents = item.priceCents.toString();
  row.appendChild(priceCell);

  return row;
}

window.onload = function() {
  Array.from(document.getElementsByClassName("to-cart-button")).forEach(element => {
    element.addEventListener("click", addToCart);
  });

  let itemList = document.getElementById("item-table");
  if (itemList) {
    getCart().items.forEach((item, id) => {
      let itemRow = createItemRow(item);
      itemRow.dataset.id = id.toString();
      itemList?.appendChild(itemRow);
    });
  }
};

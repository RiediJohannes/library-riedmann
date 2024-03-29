let idCounter = 0;


interface Item {
  isbn: string,
  title: string,
  author: string,
  priceCents: number,
  coverUrl: string,
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

  clear() : ShoppingCart {
    this._items = new Map<number, Item>();
    return this;
  }

  getTotalPriceCents(): number {
    let sum = 0;
    this._items.forEach((item: Item, _id: number) => {
      sum += item.priceCents;
    })

    return sum;
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
  const isbn = (new URL(document.location.href)).searchParams.get("isbn") ?? "none";

  let newItem: Item = {
    isbn: isbn,
    title: document.getElementById("title")?.innerText ?? "Unknown title",
    author: document.getElementById("author")?.innerText ?? "Unknown author",
    priceCents: parseInt(document.getElementById("price")?.dataset.cents ?? "NaN"),
    coverUrl: (document.getElementById("cover") as HTMLImageElement)?.src,
  }

  cart.addItem(newItem);

  console.log(cart);
  localStorage.setItem("cart", cart.toJSON());

  document.location.href = "shopping-cart.html";
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
  img.src = item.coverUrl;
  img.alt = "Cover of book [" + item.title ?? "unknown" + "]";
  figure.appendChild(img);
  imageCell.appendChild(figure);
  row.appendChild(imageCell);

  let titleCell = document.createElement("td");
  titleCell.dataset.meta = "title";
  titleCell.innerText = item.title;
  row.appendChild(titleCell);

  let priceCell = document.createElement("td");
  priceCell.innerText = getCurrencyString(item.priceCents);
  priceCell.dataset.cents = item.priceCents.toString();
  row.appendChild(priceCell);

  row.addEventListener("click", () => {
    document.location.href = "item.html?isbn=" + item.isbn;
  })

  return row;
}

function updateItemTable(isEmpty: boolean): void {
  // either display the summary footer or the "there are no items" footer
  document.getElementById("no-items-footer")?.classList.toggle("is-hidden", !isEmpty);
  document.getElementById("summary-footer")?.classList.toggle("is-hidden", isEmpty);
  
  for (let button of document.getElementsByClassName('buy-button')) {
    if (button instanceof HTMLButtonElement) {
      button.disabled = isEmpty;
    }
  }

  // also disable or enable the clear button at the same time
  const clearButton = document.getElementById("clear-button") as HTMLButtonElement;
  if (clearButton) {
    clearButton.disabled = isEmpty;
  }
}

function updateItemCount(): void {
  // add a small mark if there are items in the shopping cart
  for (let markedElement of document.getElementsByClassName("has-mark")) {
    let itemCount: number = getCart().items.size;

    if (itemCount > 0) {
      markedElement.setAttribute("value", itemCount.toString());
      markedElement.setAttribute("data-marked", "true");
    } else {
      markedElement.removeAttribute("data-marked")
    }
  }
}


// set listeners and the like when the DOM has loaded
window.addEventListener("load", () => {
  Array.from(document.getElementsByClassName("to-cart-button")).forEach(element => {
    element.addEventListener("click", addToCart);
  });

  updateItemTable(true);

  let totalPriceLabel = document.getElementById("total-price");
  if (totalPriceLabel) {
    totalPriceLabel.innerText = getCurrencyString(0);
  }

  let itemList = document.getElementById("item-table");
  if (itemList) {
    // observe the item list for changes in its children
    let itemListObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          let container = mutation.target as HTMLElement;
          updateItemTable(container.children?.length === 0)

          let totalPriceLabel = document.getElementById("total-price")
          if (totalPriceLabel) {
            totalPriceLabel.innerText = getCurrencyString(getCart().getTotalPriceCents());
          }
        }
      });
    });    
    
    // only observe childList changes
    let childListOnly = { attributes: false, childList: true, characterData: false };
    itemListObserver.observe(itemList, childListOnly);

    // fill the item list with one table row per item in the shopping cart
    const items = getCart().items;

    items.forEach((item, id) => {
      let itemRow = createItemRow(item);
      itemRow.dataset.id = id.toString();
      itemList?.appendChild(itemRow);
    });
  }

  // clear the shopping cart
  document.getElementById("clear-button")?.addEventListener("click", function() {
    // empty the shopping cart in localStorage
    let clearedCart = getCart().clear();
    localStorage.setItem("cart", clearedCart.toJSON());
    
    // clear the item table in the UI
    document.getElementById("item-table")?.replaceChildren();

    // reset the total price
    let totalPriceLabel = document.getElementById("total-price");
    if (totalPriceLabel) {
      totalPriceLabel.innerText = getCurrencyString(0);
    }

    // unfocus the clear button
    this.blur();

    // update the item count marks
    updateItemCount();
  });

  for (let button of document.getElementsByClassName("buy-button")) {
    button.addEventListener("click", () => {
      let cart = getCart();

      cart.items.forEach((item: Item, id: number) => {
        console.log("Bought item " + id + ":" +
          "\ntitle: " + item.title +
          "\nauthor: " + item.author +
          "\nprice: " + item.priceCents / 100);
      })

      // empty the shopping cart
      cart.clear();
      localStorage.setItem("cart", cart.toJSON());

      updateItemCount();
      
      // return to home page
      document.location.href = "index.html";
    })
  }

  updateItemCount();
});

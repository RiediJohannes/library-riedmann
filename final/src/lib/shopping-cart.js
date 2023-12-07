"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var idCounter = 0;
var ShoppingCart = /*#__PURE__*/function () {
  function ShoppingCart() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
    _classCallCheck(this, ShoppingCart);
    this._items = items !== null && items !== void 0 ? items : new Map();
    if (this._items.size > 0) {
      idCounter = Math.max.apply(Math, _toConsumableArray(this._items.keys())) + 1;
    }
  }
  _createClass(ShoppingCart, [{
    key: "items",
    get: function get() {
      return this._items;
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      this._items.set(idCounter++, item);
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var _this$_items$get;
      var item = (_this$_items$get = this._items.get(id)) !== null && _this$_items$get !== void 0 ? _this$_items$get : null;
      this._items["delete"](id);
      return item;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._items = new Map();
      return this;
    }
  }, {
    key: "getTotalPriceCents",
    value: function getTotalPriceCents() {
      var sum = 0;
      this._items.forEach(function (item, _id) {
        sum += item.priceCents;
      });
      return sum;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      // serialize map separately as JSON would create an object from it
      var itemList = Array.from(this._items.entries());
      var serializableCart = {
        items: itemList
      };
      return JSON.stringify(serializableCart);
    }

    // Deserialize the class from its JSON representation
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var _jsonCart$items;
      var jsonCart = JSON.parse(json);
      var itemMap = new Map((_jsonCart$items = jsonCart.items) !== null && _jsonCart$items !== void 0 ? _jsonCart$items : []);
      return new ShoppingCart(itemMap);
    }
  }]);
  return ShoppingCart;
}();
function addToCart() {
  var _URL$searchParams$get, _document$getElementB, _document$getElementB2, _document$getElementB3, _document$getElementB4, _document$getElementB5, _document$getElementB6, _document$getElementB7;
  var cart = getCart();
  var isbn = (_URL$searchParams$get = new URL(document.location.href).searchParams.get("isbn")) !== null && _URL$searchParams$get !== void 0 ? _URL$searchParams$get : "none";
  var newItem = {
    isbn: isbn,
    title: (_document$getElementB = (_document$getElementB2 = document.getElementById("title")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.innerText) !== null && _document$getElementB !== void 0 ? _document$getElementB : "Unknown title",
    author: (_document$getElementB3 = (_document$getElementB4 = document.getElementById("author")) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.innerText) !== null && _document$getElementB3 !== void 0 ? _document$getElementB3 : "Unknown author",
    priceCents: parseInt((_document$getElementB5 = (_document$getElementB6 = document.getElementById("price")) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.dataset.cents) !== null && _document$getElementB5 !== void 0 ? _document$getElementB5 : "NaN"),
    coverUrl: (_document$getElementB7 = document.getElementById("cover")) === null || _document$getElementB7 === void 0 ? void 0 : _document$getElementB7.src
  };
  cart.addItem(newItem);
  console.log(cart);
  localStorage.setItem("cart", cart.toJSON());
  document.location.href = "shopping-cart.html";
}
function getCart() {
  var _localStorage$getItem;
  return ShoppingCart.fromJSON((_localStorage$getItem = localStorage.getItem("cart")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '{}');
}
function createItemRow(item) {
  var _ref;
  var row = document.createElement("tr");
  var imageCell = document.createElement("td");
  var figure = document.createElement("figure");
  figure.classList.add('image');
  var img = document.createElement("img");
  img.src = item.coverUrl;
  img.alt = (_ref = "Cover of book [" + item.title) !== null && _ref !== void 0 ? _ref : "unknown" + "]";
  figure.appendChild(img);
  imageCell.appendChild(figure);
  row.appendChild(imageCell);
  var titleCell = document.createElement("td");
  titleCell.dataset.meta = "title";
  titleCell.innerText = item.title;
  row.appendChild(titleCell);
  var priceCell = document.createElement("td");
  priceCell.innerText = getCurrencyString(item.priceCents);
  priceCell.dataset.cents = item.priceCents.toString();
  row.appendChild(priceCell);
  row.addEventListener("click", function () {
    document.location.href = "item.html?isbn=" + item.isbn;
  });
  return row;
}
function setBuyButtonsDisabled(isDisabled) {
  var _iterator = _createForOfIteratorHelper(document.getElementsByClassName('buy-button')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var button = _step.value;
      if (button instanceof HTMLButtonElement) {
        button.disabled = isDisabled;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// set listeners and the like when the DOM has loaded
window.addEventListener("load", function () {
  var _document$getElementB8;
  Array.from(document.getElementsByClassName("to-cart-button")).forEach(function (element) {
    element.addEventListener("click", addToCart);
  });
  setBuyButtonsDisabled(true);
  var totalPriceLabel = document.getElementById("total-price");
  if (totalPriceLabel) {
    totalPriceLabel.innerText = getCurrencyString(0);
  }
  var itemList = document.getElementById("item-table");
  if (itemList) {
    // observe the item list for changes in its children
    var itemListObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
          var _container$children;
          var container = mutation.target;
          setBuyButtonsDisabled(((_container$children = container.children) === null || _container$children === void 0 ? void 0 : _container$children.length) === 0);
          var _totalPriceLabel = document.getElementById("total-price");
          if (_totalPriceLabel) {
            _totalPriceLabel.innerText = getCurrencyString(getCart().getTotalPriceCents());
          }
        }
      });
    });

    // only observe childList changes
    var childListOnly = {
      attributes: false,
      childList: true,
      characterData: false
    };
    itemListObserver.observe(itemList, childListOnly);

    // fill the item list with one table row per item in the shopping cart
    getCart().items.forEach(function (item, id) {
      var itemRow = createItemRow(item);
      itemRow.dataset.id = id.toString();
      itemList === null || itemList === void 0 || itemList.appendChild(itemRow);
    });
  }

  // clear the shopping cart
  (_document$getElementB8 = document.getElementById("clear-button")) === null || _document$getElementB8 === void 0 || _document$getElementB8.addEventListener("click", function () {
    var _document$getElementB9;
    // empty the shopping cart in localStorage
    var clearedCart = getCart().clear();
    localStorage.setItem("cart", clearedCart.toJSON());

    // clear the item table in the UI
    (_document$getElementB9 = document.getElementById("item-table")) === null || _document$getElementB9 === void 0 || _document$getElementB9.replaceChildren();

    // reset the total price
    var totalPriceLabel = document.getElementById("total-price");
    if (totalPriceLabel) {
      totalPriceLabel.innerText = getCurrencyString(0);
    }

    // unfocus the clear button
    this.blur();
  });
  var _iterator2 = _createForOfIteratorHelper(document.getElementsByClassName("buy-button")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var button = _step2.value;
      button.addEventListener("click", function () {
        var cart = getCart();
        cart.items.forEach(function (item, id) {
          console.log("Bought item " + id + ":" + "\ntitle: " + item.title + "\nauthor: " + item.author + "\nprice: " + item.priceCents / 100);
        });

        // empty the shopping cart
        cart.clear();
        localStorage.setItem("cart", cart.toJSON());

        // return to home page
        document.location.href = "index.html";
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
"use strict";

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
  var _localStorage$getItem;
  localStorage.clear();
  if (!("cart" in localStorage)) {
    var _cart = new ShoppingCart();
    localStorage.setItem("cart", _cart.toJSON());
  }
  var cart = ShoppingCart.fromJSON((_localStorage$getItem = localStorage.getItem("cart")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '{}');
  console.log(cart);
  cart.addItem("Harry Po-ah");
  cart.items.forEach(function (item, id) {
    console.log("ID: " + id);
    console.log("Item: " + item);
  });

  // document.location.href = "../index.html";
}
window.onload = function () {
  Array.from(document.getElementsByClassName("to-cart-button")).forEach(function (element) {
    element.addEventListener("click", addToCart);
  });
};
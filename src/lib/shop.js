"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var relativePathToCovers = "./assets/raster/books/";
var itemPage = "./item.html";
var totalStarCount = 5;
// Function to fetch the books from "books.json"
function fetchBooks() {
  return _fetchBooks.apply(this, arguments);
}
function _fetchBooks() {
  _fetchBooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var localStorageKey, jsonFilePath, cachedBooks, _ref2, response, books;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          localStorageKey = "books";
          jsonFilePath = "./data/books.json";
          _context2.prev = 2;
          // first, check if the books are already cached in the local storage
          cachedBooks = localStorage.getItem(localStorageKey);
          if (!cachedBooks) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", (_ref2 = JSON.parse(cachedBooks)) !== null && _ref2 !== void 0 ? _ref2 : []);
        case 6:
          _context2.next = 8;
          return fetch(jsonFilePath);
        case 8:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 11;
            break;
          }
          throw new Error('Failed to fetch books');
        case 11:
          _context2.next = 13;
          return response.json();
        case 13:
          books = _context2.sent;
          // cache the fetched books in the local storage
          localStorage.setItem(localStorageKey, JSON.stringify(books));
          return _context2.abrupt("return", books);
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](2);
          console.error('Error fetching books:', _context2.t0);
          return _context2.abrupt("return", []);
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 18]]);
  }));
  return _fetchBooks.apply(this, arguments);
}
function getBookData(_x) {
  return _getBookData.apply(this, arguments);
} // Example usage
function _getBookData() {
  _getBookData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(isbn) {
    var _localStorage$getItem;
    var book, _bookList$find, bookList;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // first, check for cached book data in local storage
          book = JSON.parse((_localStorage$getItem = localStorage.getItem(isbn)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : "{}");
          if (book) {
            _context3.next = 6;
            break;
          }
          _context3.next = 4;
          return fetchBooks();
        case 4:
          bookList = _context3.sent;
          book = (_bookList$find = bookList.find(function (book) {
            return book.isbn === isbn;
          })) !== null && _bookList$find !== void 0 ? _bookList$find : null;
        case 6:
          return _context3.abrupt("return", book);
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getBookData.apply(this, arguments);
}
function displayBooks(_x2, _x3) {
  return _displayBooks.apply(this, arguments);
}
function _displayBooks() {
  _displayBooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(bookContainer, filter) {
    var books, keyword, bookCards;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!bookContainer) {
            _context4.next = 9;
            break;
          }
          _context4.next = 3;
          return fetchBooks();
        case 3:
          books = _context4.sent;
          keyword = filter.trim().toLowerCase();
          if (filter.length > 0) {
            books = books.filter(function (book) {
              return (
                // filter for books that match the keyword either in title or author
                book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword)
              );
            }).sort(function (book) {
              return (
                // show title matches before author matches
                book.title.toLowerCase().includes(keyword) ? -1 : 1
              );
            });
          }
          bookCards = "";
          books.forEach(function (book) {
            var bookCard = createBookCard(book);
            localStorage.setItem(book.isbn, JSON.stringify(book));
            bookCards += bookCard;
          });
          bookContainer.innerHTML = bookCards;
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _displayBooks.apply(this, arguments);
}
function createBookCard(book) {
  // create the rating stars
  var starsToFill = book.rating;
  var ratingHtml = "";
  for (var i = 0; i < totalStarCount; i++) {
    ratingHtml += "\n    <svg class=\"star\" ".concat(starsToFill > 0 ? "data-filled" : "", " fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M9.69958 1.65054C10.0344 0.999196 10.9656 0.999197 11.3004 1.65054L13.3968 5.7284C13.6795 6.27816 14.2119 6.65607 14.8241 6.74147L19.4148 7.38186C20.1644 7.48642 20.458 8.41325 19.9054 8.93038L16.6578 11.9693C16.1878 12.4092 15.9725 13.0571 16.0857 13.6908L16.8622 18.0374C16.9927 18.7678 16.2331 19.3334 15.5707 18.9991L11.3561 16.872C10.8177 16.6003 10.1823 16.6003 9.64392 16.872L5.42925 18.9991C4.7669 19.3334 4.00728 18.7678 4.13777 18.0374L4.91433 13.6908C5.02755 13.0571 4.81219 12.4092 4.34216 11.9693L1.09462 8.93038C0.541999 8.41325 0.835636 7.48642 1.58522 7.38186L6.1759 6.74147C6.78813 6.65607 7.32055 6.27816 7.60318 5.7284L9.69958 1.65054Z\" fill=\"#E1CA00\" stroke=\"black\"/>\n    </svg>\n    ");
    starsToFill--;
  }

  // fill the rest of the HTML template
  var previewPathAddon = "preview/";
  return "\n  <a href=\"".concat(itemPage + "?isbn=" + book.isbn, "\" class=\"card book-preview is-shadowless\">\n    <div class=\"card-content is-flex is-flex-direction-row is-flex-wrap-nowrap\">\n      <div class=\"cover column is-flex-grow-1 is-flex-shrink-1\">\n        <figure class=\"image is-2by3\">\n          <img src=\"").concat(relativePathToCovers + previewPathAddon + book.coverUrl, "\" alt=\"Book cover [").concat(book.title, "]\">\n        </figure>\n      </div>\n\n      <div class=\"book-info column is-flex-grow-1\">\n        <div>\n          <h1 class=\"title\">").concat(book.title, "</h1>\n          <h2 class=\"subtitle\">").concat(book.author, "</h2>\n        </div>\n        <div>\n          <figure class=\"image rating\">\n            ").concat(ratingHtml, "\n          </figure>\n\n          <span class=\"price\" data-cents=\"").concat(book.priceCents, "\">").concat(getCurrencyString(book.priceCents), "</span>\n        </div>\n      </div>\n    </div>\n  </a>\n  ");
}
function fillBookInfo(book) {
  var titleLabel = document.getElementById("title");
  if (titleLabel) {
    titleLabel.innerText = book.title;
  }
  var authorLabel = document.getElementById("author");
  if (authorLabel) {
    authorLabel.innerText = book.author;
  }
  var descriptionLabel = document.getElementById("description");
  if (descriptionLabel) {
    descriptionLabel.innerText = book.description;
  }
  var priceLabel = document.getElementById("price");
  if (priceLabel) {
    priceLabel.dataset.cents = book.priceCents.toString();
    priceLabel.innerText = getCurrencyString(book.priceCents);
  }
  var coverImage = document.getElementById("cover");
  if (coverImage) {
    coverImage.src = relativePathToCovers + book.coverUrl;
    coverImage.alt = "Book cover [".concat(book.title, "]");
  }
  document.title = book.title;
}
function searchBooks(bookDestination, event) {
  event.preventDefault();
  var form = event.target;
  if (form) {
    var _formData$get$toStrin, _formData$get;
    var formData = new FormData(form);
    var filter = (_formData$get$toStrin = (_formData$get = formData.get("filter")) === null || _formData$get === void 0 ? void 0 : _formData$get.toString()) !== null && _formData$get$toStrin !== void 0 ? _formData$get$toStrin : "";
    displayBooks(bookDestination, filter);

    // update URL with search filter parameter
    var url = new URL(window.location.href);
    url.searchParams.set("filter", filter);
    window.history.replaceState({
      path: url.toString()
    }, '', url.toString());
  }
}
window.addEventListener("load", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var _URL$searchParams$get;
  var filter, bookDestination, searchForm, _searchForm, bookInfo, isbn, book;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        filter = (_URL$searchParams$get = new URL(document.location.href).searchParams.get("filter")) !== null && _URL$searchParams$get !== void 0 ? _URL$searchParams$get : "";
        bookDestination = document.getElementById("book-results");
        if (bookDestination) {
          displayBooks(bookDestination, filter);
          searchForm = document.getElementById("search-form");
          if (searchForm) {
            searchForm.onsubmit = function (event) {
              return searchBooks(bookDestination, event);
            };
          }
        }

        // if the user already searched something, focus the searchbar input and set its value to the last filter
        if (filter.trim() !== "") {
          _searchForm = document.getElementById("search-form");
          _searchForm.filter.value = filter;
          _searchForm.filter.focus();
        }
        bookInfo = document.getElementById("book-info");
        if (!bookInfo) {
          _context.next = 12;
          break;
        }
        isbn = new URL(document.location.href).searchParams.get("isbn");
        if (!isbn) {
          document.location.href = "/404.html";
        }
        _context.next = 10;
        return getBookData(isbn !== null && isbn !== void 0 ? isbn : "none");
      case 10:
        book = _context.sent;
        if (!book) {
          document.location.href = "/404.html";
        } else {
          fillBookInfo(book);
        }
      case 12:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
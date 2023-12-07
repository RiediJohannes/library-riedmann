interface Book {
  title: string,
  author: string,
  description: string,
  priceCents: number,
  coverUrl: string,
  itemUrl: string,
  rating: number,
}

// Function to fetch the books from "books.json"
async function fetchBooks(): Promise<Book[]> {
  const localStorageKey: string = "books";
  const jsonFilePath: string = "./books/books.json";

  try {
    // first, check if the books are already cached in the local storage
    let cachedBooks = localStorage.getItem(localStorageKey);
    if (cachedBooks) {
      return JSON.parse(cachedBooks) as Book[] ?? [];
    }

    // otherwise fetch the data from a JSON file
    const response = await fetch(jsonFilePath);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const books: Book[] = await response.json();
    // cache the fetched books in the local storage
    localStorage.setItem(localStorageKey, JSON.stringify(books));
    return books;

  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

// Example usage
async function displayBooks() {
  let bookDestination = document.getElementById("book-results");
  if (bookDestination) {
    const books: Book[] = await fetchBooks();
    
    let bookCards: string = "";
    books.forEach((book) => {
      let bookCard: string = createBookCard(book);
      bookCards += bookCard;
    })
    
    bookDestination.innerHTML = bookCards;
  }
}

function createBookCard(book: Book): string {
  const relativePathToCovers: string = "./assets/raster/books/";
  const itemPage: string = "./item.html";
  const totalStarCount = 5;

  // create the rating stars
  let starsToFill: number = book.rating;
  let ratingHtml: string = "";
  for (let i = 0; i < totalStarCount; i++) {
    ratingHtml += `
    <svg class="star" ${starsToFill > 0 ? "data-filled" : ""} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.69958 1.65054C10.0344 0.999196 10.9656 0.999197 11.3004 1.65054L13.3968 5.7284C13.6795 6.27816 14.2119 6.65607 14.8241 6.74147L19.4148 7.38186C20.1644 7.48642 20.458 8.41325 19.9054 8.93038L16.6578 11.9693C16.1878 12.4092 15.9725 13.0571 16.0857 13.6908L16.8622 18.0374C16.9927 18.7678 16.2331 19.3334 15.5707 18.9991L11.3561 16.872C10.8177 16.6003 10.1823 16.6003 9.64392 16.872L5.42925 18.9991C4.7669 19.3334 4.00728 18.7678 4.13777 18.0374L4.91433 13.6908C5.02755 13.0571 4.81219 12.4092 4.34216 11.9693L1.09462 8.93038C0.541999 8.41325 0.835636 7.48642 1.58522 7.38186L6.1759 6.74147C6.78813 6.65607 7.32055 6.27816 7.60318 5.7284L9.69958 1.65054Z" fill="#E1CA00" stroke="black"/>
    </svg>
    `;

    starsToFill--;
  }

  // fill the rest of the HTML template
  return `
  <a href="${itemPage}" class="card book-preview is-shadowless">
    <div class="card-content is-flex is-flex-direction-row is-flex-wrap-nowrap">
      <div class="cover column is-flex-grow-1 is-flex-shrink-1">
        <figure class="image is-2by3">
          <img src="${relativePathToCovers + book.coverUrl}" alt="Book cover [${book.title}]">
        </figure>
      </div>

      <div class="book-info column is-flex-grow-1">
        <div>
          <h1 class="title">${book.title}</h1>
          <h2 class="subtitle">${book.author}</h2>
        </div>
        <div>
          <figure class="image rating">
            ${ratingHtml}
          </figure>

          <span class="price">${getCurrencyString(book.priceCents)}</span>
        </div>
      </div>
    </div>
  </a>
  `
}

window.onload = function() {
  displayBooks();
};

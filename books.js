const booksWrapper = document.querySelector(".books");
const selectElement = document.querySelector("#filter");

function renderBooks(filter) {
  const books = getBooks();

  if (filter === "LOW_TO_HIGH") {
    console.log("sorting by low to high");
    books.sort((a, b) => a.originalPrice - b.originalPrice);
  } else if (filter === "HIGH_TO_LOW") {
    console.log("sorting by high to low");
    books.sort((a, b) => b.originalPrice - a.originalPrice);
  } else if (filter === "RATING") {
    console.log("sorting by rating");
    books.sort((a, b) => b.rating - a.rating);
  }

  const booksHTML = books
    .map(book => {
      return `
      <div class="book">
      <figure class="book__img--wrapper">
        <img class="book__img" src="${book.url}" alt="">
      </figure>
      <div class="book__title">
        ${book.title}
      </div>
      <div class="book__ratings">
        ${ratingsHTML(book.rating)}
      </div>
      <div class="book__price">
        <span class="book__price--normal">$${book.originalPrice.toFixed(
          2
        )}</span>
      </div>
    </div>
    `;
    })
    .join(""); // We add join() to remove the commas as map() returns an array
  booksWrapper.innerHTML = booksHTML;
}

setTimeout(() => {
  renderBooks();
});

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHTML += `<i class="fas fa-star"></i>`;
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += `<i class="fas fa-star-half-alt"></i>`;
  }
  return ratingHTML;
}

selectElement.addEventListener("change", filterBooks);

function filterBooks(event) {
  renderBooks(event.target.value);
}

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets/crack-the-coding-interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic-habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Can't Hurt Me",
      url: "assets/david-goggins.jpeg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 4,
      title: "Deep Work",
      url: "assets/deep-work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 3.5,
    },
    {
      id: 5,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 7,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 8,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 9,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 10,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 12,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}

// MDN Events - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const booksRequested = (newBooks) => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

export { booksLoaded, booksRequested };

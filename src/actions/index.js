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

const booksError = (error) => {
  return {
    type: "BOOKS_ERROR",
    payload: error,
  };
};

export { booksLoaded, booksRequested, booksError };

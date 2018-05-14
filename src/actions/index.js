export function selectBook(book) {
    // retuning an action.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
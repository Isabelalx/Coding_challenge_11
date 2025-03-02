// Task 1 
// Create a book class 

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author; // Creating properties 
        this.isbn = isbn;
        this.copies = copies;
    };
    getDetails() { // returns a formatted string of book details.
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    };
    updateCopies(quantity) { // modifies the available copies
        this.copies += quantity; 
        return this.copies;
    }
}

// Test Cases task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
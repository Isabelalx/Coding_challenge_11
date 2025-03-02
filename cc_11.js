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

// Task 2
// Creating a borrower class

class Borrower {
    constructor(name, borrowerId, borrowedBooks = []) {
        this.name = name;
        this.borrowerId = borrowerId; // Creating properties 
        this.borrowedBooks = borrowedBooks;
    };

    borrowBook(book) { // adds a book to the borrowedBooks array
        this.borrowedBooks.push(book);
        return this.borrowedBooks;
    };
    returnBook(book) { // removes a book from the borrowedBooks array
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        return this.borrowedBooks;
    };
}

// Test Cases task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

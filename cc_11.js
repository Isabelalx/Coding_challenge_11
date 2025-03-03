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
    
        lendBook(borrowerId, isbn) {
            const book = this.books.find(book => book.isbn === isbn);
            const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
            if (book && borrower && book.copies > 1) { // checks conditions to lend book
                book.updateCopies(-1); // removes 1 from stock
                borrower.borrowBook(book.title);        
            } else {
                console.log("Cannot lend book.")
            }
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

// Task 3
// Creating a library class

class Library {
    constructor(books, borrowers) {
        this.books = []; // Creating properties 
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
        return this.books;
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        
        if (book && borrower && book.copies > 0) { // checks conditions to lend book
            book.updateCopies(-1); // removes 1 from stock
            borrower.borrowBook(book.title);        
        };
    }
    returnBook(BorrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        if (book && borrower) { // checks conditions to return book
            book.updateCopies(1); // adds 1 to stock
            borrower.returnBook(book.title);
        }
    }
}



// Test Cases task 3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4
// Implementing book borrowers

library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Task 5
// Implementing a return book method

library.lendBook(201, 123456);
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []


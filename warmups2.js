class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.plages = pages,
            this.isbn = isbn;
    }
    printIsbn() { console.log(this.isbn); }
}

function Book2(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book2.prototype.printTitle = function() {
    console.log(this.title);
};

class ItBook extends Book2 {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology() { console.log(this.technology); }
}

let jsBook = new ItBook('JS algos', 2000, '123', 'JS')
console.log(jsBook.title);
console.log(jsBook.printTechnology());
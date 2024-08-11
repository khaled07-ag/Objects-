const book={
Title: "JavaScript: The Definitive Guide",
Author: "David Flanagan",
PublishedYear: 2020,
Genre: "Programming",

}
console.log(book.Title+" "+book.PublishedYear);

book.pageCount=1096
book.ISBN= "978-1491952023"
book.PublishedYear=2021
book.Author=["David Flanagan" , "Another Author"]
book.reviews=[{reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."},
    {reviewer: "James", comment: "Awsome book."}]
console.log(book)
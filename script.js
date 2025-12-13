const myLibrary = [

]
function Book(id, title , author, pages, readStatus){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}
function createBook(title , author, pages, readStatus){
    const id = crypto.randomUUID()
    const readStatus = false
    const book = new Book(id, title, author, pages, readStatus)
    myLibrary.push(book)
}

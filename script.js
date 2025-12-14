const myLibrary = [
    {id : "878840f1-99da-4677-97ee-2c63ebf4347e", title : "Good turns Bad", author : "John doe", pages : 300, readStatus : true},
    {id : "296fa314-f9f7-46ad-a979-4b767736b467", title : "Sage Chronicles", author : "Sage", pages: 200, readStatus : false},
    {id : "8d217608-3703-4180-b8b1-a7e60295599a", title : "The art of the sword", author : "Samurai Jack", pages: 250, readStatus : false},
    {id : "5e64b471-f4c0-4213-8041-fc4c4dca43e4", title : "Project X", author : "Prof", pages : 350, readStatus : true}
]
function Book(id, title , author, pages, readStatus){
    if(!new.target){
        console.log("Book need to be created with the new keyword")
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}
function createBook(title , author, pages){
    const id = crypto.randomUUID().toString()
    const readStatus = false
    const book = new Book(id, title, author, pages, readStatus)
    myLibrary.push(book)
    return myLibrary
}
console.log(myLibrary[1].id)

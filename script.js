const myLibrary = [
    {id : "878840f1-99da-4677-97ee-2c63ebf4347e", title : "Good turns Bad", author : "John doe", pages : 300, readStatus : true},
    {id : "8d217608-3703-4180-b8b1-a7e60295599a", title : "The art of the sword", author : "Samurai Jack", pages: 250, readStatus : false},
    {id : "5e64b471-f4c0-4213-8041-fc4c4dca43e4", title : "Project X", author : "Prof", pages : 350, readStatus : true}
]
const container = document.querySelector(".books")
const dialogCloseButton = document.querySelector("#dialog-close")
const dialog = document.querySelector("dialog");
const showDialogButton = document.querySelector("#show-dialog")
const submitButton = document.querySelector("#add-book")
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
dialogCloseButton.addEventListener("click", ()=>{
    dialog.close()
})
showDialogButton.addEventListener("click", ()=> {
    dialog.showModal()
})
submitButton.addEventListener("click", (event)=> {
    event.preventDefault()
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    createBook(title, author, pages)
    renderLibrary()
    dialog.close()
})
document.addEventListener("DOMContentLoaded", renderLibrary );
function renderLibrary() {
    container.innerHTML = ""; 
    myLibrary.forEach(book => {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <small class="book-id">ID: ${book.id}</small>
            <div>
                <p>Author: ${book.author}</p>
                <p>Page count: ${book.pages}</p>
            </div>
            <div class="read-status">${book.readStatus}</div>
            <button class="delete-btn">Delete</button>
        `;

        container.appendChild(card);
    });
}
container.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-btn")) return;

    const card = event.target.closest(".card");
    const bookId = card.querySelector(".book-id").textContent.replace("ID: ", "");

    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }

    renderLibrary();
});

/* Lo unico que se me olvido hacer fue comprobar que no mande 
información vacía todo lo demas lo hace mi ejercicio pero este 
esta mejor ordenado */

class book{
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    getAuthor(){
        return this.author
    }
    getGender(){
        return this.gender
    }
    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
}

let books = []

while(books.length<3){
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año del libro')
    let gender = prompt('Introduce el genero del libro').toLowerCase()

    if (title != '' && 
        author != '' && 
        !isNaN(year) && year.length == 4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasía' )){
        
        books.push(new book(title, author, year, gender))

    }   
}

const showAllBooks = () => {
   alert(books)
}

const showAuthors = () => {
    let authors = []
    for (const book of books) {
       authors.push(book.getAuthor());
    }

    alert(authors.so)

}

const showGender = () => {
    const gender = prompt('Introduce el género a buscar');

    for (const book of books) {
        if(book.getGender()==gender){
            alert(book.bookInfo());
        }
    }

}

showAllBooks()
showAuthors()
showGender()
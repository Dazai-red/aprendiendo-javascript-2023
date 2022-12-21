
// clase libro

class book {
    constructor(title, author, year, gender){
        this.title = title,
        this.author = author,
        this.year = year,
        this.gender = gender
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    getGender(){
        return this.gender;
    }
    getDataBook(){
        return `El titulo del libro es ${this.title} su autor ${this.author} el año de lanzamiento es ${this.year} su genero es de ${this.gender}\n`;
    }
}

// funciones
const getBooks = (arrayBoks) => {
    let books = '';
    for (const book of arrayBoks) {
        books += book.getTitle()+', ';
    }
    return books;
}

const getAuthorsSorted = (arrayBoks) => {
    let authors = [];
    let result = '';
    let i =0;
    for (const book of arrayBoks) {
        authors[i] = book.getAuthor();
        i++;
    }
    let authorsSorted = authors.sort();
    for (const author of authorsSorted) {
        result += author+', ';
    }
    return result;
}

const getInfoFromGender = (arrayBoks,gender) => {
    let result = '';
    let thereAreResults=false;
    for (const book of arrayBoks) {
        if(book.getGender()==gender){
            result += book.getDataBook()+' ';
            thereAreResults=true;
        }
    }
    if(!thereAreResults) result = 'No existen libros con el genero introducido.';
    return result;
}

// Pedir datos al usuario
let books = [];
for(let i=0;i<3;i++){
    let title = prompt('Introduce el título del libro: ');
    let author = prompt('Introduce el autor del libro: ');
    let year;
    while(isNaN(year) || year<0 || year > 9999){
        year = prompt('Introduce el año del libro: ');
        if (isNaN(year)) alert('El año tiene que ser un número!');
        if(year<0 || year >9999) alert('No has introducido un año valido');
    }
    let genderValid=false;
    let gender
    const gendersValids = ['aventuras', 'terror', 'fantasía'];
    while(!genderValid){
        gender = prompt(`Introduce el genero del libro puede ser alguno de estos: ${gendersValids.join(', ')}`).toLowerCase();
        for (const genderValids of gendersValids) {
            if(genderValids===gender)
                genderValid=true;
        }
        if(!genderValid) {
            alert(
                `El genero ${gender} no es valido, introduce alguno de estos generos: ${gendersValids.join(', ')}`
            );
        }
    }
    //Instanciando objetos dentro del array
    books[i] = new book(title, author, year, gender);
}
// llamada de funciones
alert(getBooks(books));
alert(getAuthorsSorted(books));
let gender = prompt('Introduce un genero para buscar libros que contengan el genero indicado').toLowerCase();
alert(getInfoFromGender(books,gender));








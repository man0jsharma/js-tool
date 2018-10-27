const library = {
    name: 'Boston public library',
    address: 'Chelsea',
    owner: 'Charles',
    books: [
        {
            name: 'Advanced React',
            author: 'Mark',
            price: '100',
            ISBN: '90000'
        },
        {
            name: 'Advanced Angular',
            author: 'Mike',
            price: '90',
            ISBN: '90001'
        },
        {
            name: 'Advanced Vue',
            author: 'Miller',
            price: '70',
            ISBN: '90002'
        },
        {
            name: 'Advanced Redux',
            author: 'Jobs',
            price: '80',
            ISBN: '90003'
        },
        {
            name: 'Advanced C++',
            author: 'Miller',
            price: '101',
            ISBN: '90004'
        }
    ]
}


//Create a method find the cheapest book
const sortByCost = library.books.sort(
    (firstBook, secondBook) =>
        firstBook.price - secondBook.price);

console.log(sortByCost[0]);
//Create a method to find the books wrote by 'Miller'

const millerBooks = library.books.filter(book => book.author === 'Miller');
console.log(millerBooks);

//Create a method to fetch the library address + Owner name in this format 
// {
//     libraryAddress: 'xxx',
//     owner : 'xxxxx'
// }

 const libraryObj = {
     libraryAddress : library.address,
     owner : library.owner
 }

 console.log(libraryObj);
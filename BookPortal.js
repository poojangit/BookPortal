const readlineSync = require('readline-sync')
var BookDetails = [
    {
      bookId : 10,
      bookName : "The Best of Us ",
      price : 100,
      bookStatus : "Avalilable",
      quantity : 1
    },
    {
        bookId : 11,
        bookName : "One Indian Girl",
        price : 200,
        bookStatus : "Unavalilable",
        quantity : 3
      },
      {
        bookId : 12,
        bookName : "Half Girlfriend",
        price : 500,
        bookStatus : "Avalilable",
        quantity : 2
      },
      {
        bookId : 13,
        bookName : "The God of Small Things ",
        price : 100,
        bookStatus : "Avalilable",
        quantity : 1
      },
      {
        bookId : 14,
        bookName : "The White Tiger ",
        price : 400,
        bookStatus : "Unavalilable",
        quantity : 2
      },
      {
        bookId : 15,
        bookName : "Revolution 2020",
        price : 100,
        bookStatus : "Unavalilable",
        quantity : 2
      },
      {
        bookId : 16,
        bookName : "The 3 Mistakes of My Life",
        price : 300,
        bookStatus : "Avalilable",
        quantity : 1
      },
      {
        bookId : 17,
        bookName : "The Namesake",
        price : 500,
        bookStatus : "Avalilable",
        quantity : 1
      },
      {
        bookId : 18,
        bookName : "The Palace of Illusions",
        price : 600,
        bookStatus : "Unavalilable",
        quantity : 3
      }
]

function mainMenu() {
    console.log("1 Show available Books");
    console.log("2 Add Book")
    console.log("3 Show cart");
}
const choice = readlineSync.question("Please select an option: ")

const readlineSync = require('readline-sync')
var BookDetails = [
    {
      bookId : 10 ,
      bookName : "The Best of Us ",
      price : 100,
      bookStatus : "Available",
      quantity : 1
    },
    {
        bookId : 11,
        bookName : "One Indian Girl",
        price : 200,
        bookStatus : "Unavalilable",
        quantity : 1
      },
      {
        bookId : 12,
        bookName : "Half Girlfriend",
        price : 500,
        bookStatus : "Available",
        quantity : 1
      },
      {
        bookId : 13,
        bookName : "The God of Small Things ",
        price : 100,
        bookStatus : "Available",
        quantity : 1
      },
      {
        bookId : 14,
        bookName : "The White Tiger ",
        price : 400,
        bookStatus : "Unavalilable",
        quantity : 1
      },
      {
        bookId : 15,
        bookName : "Revolution 2020",
        price : 100,
        bookStatus : "Unavalilable",
        quantity : 1
      },
      {
        bookId : 16,
        bookName : "The 3 Mistakes of My Life",
        price : 300,
        bookStatus : "Available",
        quantity : 1
      },
      {
        bookId : 17,
        bookName : "The Namesake",
        price : 500,
        bookStatus : "Available",
        quantity : 5
      },
      {
        bookId : 18,
        bookName : "The Palace of Illusions",
        price : 600,
        bookStatus : "Unavalilable",
        quantity : 1
      }
]
var cart = []
function mainMenu() {
    console.log("1 Show available Books");
    console.log("2 Add Book")
    console.log("3 Show cart");
    console.log("4 Exit from the choice");
    const choice = readlineSync.question("Please select an option: ")

switch (choice) {
  case '1':
    showBooks()
    break;
  case '2':
    addBooks()
    break
  case '3':
    showCart()
    break
  case '4' :
    return
  default:
    console.log("You entered invalid choice");
    break;
}
}

mainMenu()

function showBooks() {
  console.log("Available Books to buy: ");
  BookDetails.forEach(book => {
    if(book.quantity > 0)
    book.bookStatus = "Available"
  else {
    book.bookStatus = "Unavailable"
  }
  if(book.bookStatus === "Available")
      {
        console.log()
        console.log(`Book Id : ${book.bookId}`)
        console.log(`Name : ${book.bookName} `)
        console.log(`Price : ${book.price} ` ) 
        console.log(`Quantity: ${book.quantity}`);
        console.log("-----------------------------------")

      }
  })
}
mainMenu()

function addBooks() {
  const bookId = parseInt(readlineSync.question("Enter the book ID to add to cart: "));
  const book = BookDetails.find(book => book.bookId === bookId);

  if (book && book.bookStatus === "Available" && book.quantity > 0) {
      const quantity = parseInt(readlineSync.question(`Enter the quantity to add to cart (Available: ${book.quantity}): `));
      
      if (quantity > 0 && quantity <= book.quantity) {
          cart.push({
              bookId: book.bookId,
              bookName: book.bookName,
              price: book.price,
              quantity: quantity
          });
          book.quantity -= quantity;

          console.log(`Book "${book.bookName}" added to the cart. Quantity: ${quantity}`);
      } else {
          console.log("Invalid quantity. Please enter a quantity within the available range.");
      }
  } else {
      console.log("Book is not available or invalid book ID.");
  }
}
mainMenu()
function showCart() {
  console.log("Cart Items:");
  if (cart.length === 0) {
      console.log("Your cart is empty.");
  } else {
    let totalCartValue = 0;
      cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        totalCartValue += totalPrice;
          console.log(`ID: ${item.bookId}, Name: ${item.bookName}, Price: ${item.price}, Quantity: ${item.quantity}, Total Price: ${totalPrice}`);
      });
      console.log(`Total Cart Value: ${totalCartValue}`);
  }
}
mainMenu()
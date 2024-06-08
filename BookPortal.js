const readlineSync = require('readline-sync')
var BookDetails = [
  {
    bookId: 10,
    bookName: "The Best of Us ",
    price: 100,
    bookStatus: "Available",
    quantity: 3
  },
  {
    bookId: 11,
    bookName: "One Indian Girl",
    price: 200,
    bookStatus: "Unavalilable",
    quantity: 1
  },
  {
    bookId: 12,
    bookName: "Half Girlfriend",
    price: 500,
    bookStatus: "Available",
    quantity: 1
  },
  {
    bookId: 13,
    bookName: "The God of Small Things ",
    price: 100,
    bookStatus: "Available",
    quantity: 1
  },
  {
    bookId: 14,
    bookName: "The White Tiger ",
    price: 400,
    bookStatus: "Unavalilable",
    quantity: 1
  },
  {
    bookId: 15,
    bookName: "Revolution 2020",
    price: 100,
    bookStatus: "Unavalilable",
    quantity: 1
  },
  {
    bookId: 16,
    bookName: "The 3 Mistakes of My Life",
    price: 300,
    bookStatus: "Available",
    quantity: 1
  },
  {
    bookId: 17,
    bookName: "The Namesake",
    price: 500,
    bookStatus: "Available",
    quantity: 5
  },
  {
    bookId: 18,
    bookName: "The Palace of Illusions",
    price: 600,
    bookStatus: "Unavalilable",
    quantity: 1
  }
]
var cart = []
let updateInput

function mainMenu() {
  console.log("1 Show available Books");
  console.log("2 Add Book")
  console.log("3 Show cart");
  console.log("4 Update Cart")
  console.log("5 Exit from the choice");
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
    case '4':
      updateCart()
      break
    case '5':
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
    if (book.quantity > 0)
      book.bookStatus = "Available"
    else {
      book.bookStatus = "Unavailable"
    }
    if (book.bookStatus === "Available") {
      console.log()
      console.log(`Book Id : ${book.bookId}`)
      console.log(`Name : ${book.bookName} `)
      console.log(`Price : ${book.price} `)
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
    while (true) {
      const quantity = parseInt(readlineSync.question(`Enter the quantity to add to cart (Available: ${book.quantity}): `));

      if (quantity > 0 && quantity <= book.quantity) {
        const cartItem = cart.find(item => item.bookId === bookId)

        if (cartItem) {
          cartItem.quantity += quantity
        }
        else {
          cart.push({
            bookId: book.bookId,
            bookName: book.bookName,
            price: book.price,
            quantity: quantity
          });
        }
        book.quantity -= quantity;

        console.log(`Book "${book.bookName}" added to the cart. Quantity: ${quantity}`);
        break
      } else {
        console.log("Invalid quantity. Please enter a quantity within the available range.");
      }
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



function updateCart() {
  if (cart.length > 0) {
      const updateInput = parseInt(readlineSync.question("Enter the book ID you want to update: "));
      const cartItem = cart.find(book => book.bookId === updateInput);

      if (cartItem) {
          console.log("Choose the kind of operation you want to perform:");
          console.log("1. Increase the quantity");
          console.log("2. Decrease the quantity");
          console.log("3. Remove");
          const select = readlineSync.question("Select the option: ");
          switch (select) {
              case "1":
                  increaseQuantity(cartItem);
                  break;
              case "2":
                  decreaseQuantity(cartItem);
                  break;
              case "3":
                  removeFromTheCart(cartItem);
                  break;
              default:
                  console.log("You entered an invalid choice");
                  break;
          }
      } else {
          console.log("This Book is not available inside your cart");
          updateCart();
      }
  } else {
      console.log("You don't have anything in the cart!!! Kindly add the item");
  }
}

function increaseQuantity(cartItem) {
  while (true) {
    console.log("Enter The Increase Quantity");
    let increaseInput = parseInt(readlineSync.question());

    const book = BookDetails.find(mainBook => mainBook.bookId === cartItem.bookId);
      if (increaseInput <= book.quantity) {
          cartItem.quantity += increaseInput;
          book.quantity -= increaseInput;
          console.log("Successfully increased");
          console.log(cart);
          console.log(book);
          break;
      } else {
          if (book.quantity === 0) {
              console.log("It is unavailable, you can't increase");
              break;
          } else {
              console.log(`That much quantity is not there, only ${book.quantity} pcs available`);
          }
      }
  }
}

function decreaseQuantity(cartItem) {
  const decreaseValue = parseInt(readlineSync.question("Enter the decrease quantity: "));
  const book = BookDetails.find(mainBook => mainBook.bookId === cartItem.bookId);
  if (book) {
      if (decreaseValue > 0 && decreaseValue <= cartItem.quantity) {
          cartItem.quantity -= decreaseValue;
          book.quantity += decreaseValue;
          if (cartItem.quantity === 0) {
              removeFromTheCart(cartItem);
          } else {
              console.log(`Decreased the quantity by ${decreaseValue}. New quantity: ${cartItem.quantity}`);
          }
      } else {
          console.log(`Invalid quantity. Please enter a quantity within the available range (In cart: ${cartItem.quantity}).`);
      }
  }
}

function removeFromTheCart(cartItem) {
  const book = BookDetails.find(mainBook => mainBook.bookId === cartItem.bookId);
  if (book) {
      book.quantity += cartItem.quantity;
      cart = cart.filter(item => item.bookId !== cartItem.bookId);
      console.log(`Removed book "${cartItem.bookName}" from the cart.`);
  }
}
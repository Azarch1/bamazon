var mysql = require("mysql");
var inquirer = require("inquirer");

// Creating the connection for the mysql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Aceammer1!",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log ("------Welcome to Bamazon Shoppers!------");
  start(); 
});

 
// function which prompts the user for what action they should take
function start() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log(results);
    productPrompt()
  })
}

// Selecting ITEM ID'S.
function productPrompt() {
inquirer
  .prompt([
      {
        type: "number",
        name: "productid",
        message: "What is the ID of the product you would like to buy?",
        validate : function(validNum) {
          if(isNaN(validNum) === false) {
            return true;
          }

        console.log("Please select a valid number")
        return false;
      }
    },
  {
    type: "input",
    name: "quantity",
    validate : function(validNum) {
      if(isNaN(validNum) === false) {
        return true;
      }
  }
}
])
.then(function(answer) {
  var custProduct = answer.id ;
  var itemQuantity = parseInt(answer.qty);
  connection.query("SELECT stock_quantity FROM products WHERE item_id =" + answer.id, function (err,quantity) {
    console.log(quantity)
  })



  // CHECKING TO ENSURE THERE IS ENOUGH OF THE SELECTED ITEM IN STOCK.
  if (res[custProduct].stock_quantity >= prodQuantity) {

    // UPDATE DATABASE TO REFLECT TRANSACTION
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: res[custProduct].stock_quantity - itemQuantity
        },
        {
          item_id: answer.id
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(
          "Your total is $" + total + ". Thanks for your order!"
        );
        reRun();
      }
    );
  } else {
    console.log("Insufficient quantity");
    reRun();
      }
  });
}


// CONFIRM IF CUSTOMER WANTS TO PURCHASE ANOTHER ORDER
function reRun() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
      }
    ])
    .then(function(answer) {
      if (answer.reply) {
        runBamazon();
      } else {
        console.log("Thanks for visiting BAMAZON!");
      }
    });
}


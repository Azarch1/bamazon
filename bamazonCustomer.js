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
  start();
  console.log ("------Welcome to Bamazon Shoppers!------");
});

 
// function which prompts the user for what action they should take
function start() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log(results);
  })
}
console.log("----------------------------------------------------------")

// Selecting ITEM ID'S.
inquirer
  .prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID of the product you would like to buy?"
    },
  {
    type: "input",
    name: "quantity",
    message: "How many units of this product would you like to buy?"
  }
])
.then(function(answer) {
  var custProduct = answer.id - 1;
  var itemQuantity = parseInt(answer.qty);
  var total = parseFloat(
    (res[custProduct].price * itemQuantity).toFixed(2)
  );

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


var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

//These variables are pushing data to the html page by ID

var revPlaidName = document.getElementById('rev-plaid-name');
revPlaidName.innerHTML = products[0].name;
var revPlaidDesc = document.getElementById('rev-plaid-desc');
revPlaidDesc.innerHTML = products[0].description;
var revPlaidPrice = document.getElementById('rev-plaid-price');
revPlaidPrice.innerHTML = '$'+products[0].price;

var woolName = document.getElementById('wool-name');
woolName.innerHTML = products[1].name;
var woolDesc = document.getElementById('wool-desc');
woolDesc.innerHTML = products[1].description;
var woolPrice = document.getElementById('wool-price');
woolPrice.innerHTML = '$'+products[1].price;

var northName = document.getElementById('north-name');
northName.innerHTML = products[2].name;
var northDesc = document.getElementById('north-desc');
northDesc.innerHTML = products[2].description;
var northPrice = document.getElementById('north-price');
northPrice.innerHTML = '$'+products[2].price;

var ombreName = document.getElementById('ombre-name');
ombreName.innerHTML = products[3].name;
var ombreDesc = document.getElementById('ombre-desc');
ombreDesc.innerHTML = products[3].description;
var ombrePrice = document.getElementById('ombre-price');
ombrePrice.innerHTML = '$'+products[3].price;

var frinPlaidName = document.getElementById('frin-plaid-name');
frinPlaidName.innerHTML = products[4].name;
var frinPlaidDesc = document.getElementById('frin-plaid-desc');
frinPlaidDesc.innerHTML = products[4].description;
var frinPlaidPrice = document.getElementById('frin-plaid-price');
frinPlaidPrice.innerHTML = '$'+products[4].price;

var multiName = document.getElementById('multi-name');
multiName.innerHTML = products[5].name;
var multiDesc = document.getElementById('multi-desc');
multiDesc.innerHTML = products[5].description;
var multiPrice = document.getElementById('multi-price');
multiPrice.innerHTML = '$'+products[5].price;

var etroName = document.getElementById('etro-name');
etroName.innerHTML = products[6].name;
var etroDesc = document.getElementById('etro-desc');
etroDesc.innerHTML = products[6].description;
var etroPrice = document.getElementById('etro-price');
etroPrice.innerHTML = '$'+products[6].price;

var twillName = document.getElementById('twill-name');
twillName.innerHTML = products[7].name;
var twillDesc = document.getElementById('twill-desc');
twillDesc.innerHTML = products[7].description;
var twillPrice = document.getElementById('twill-price');
twillPrice.innerHTML = '$'+products[7].price;

//This is the empty cart

var cart = [];

//This is the function to push and pop items to the cart array

function cartBasket(value) {
  var item = products[value].name;
  var index = cart.findIndex(function(el){
    return el.name == item
  });
    if(index >= 0){
      cart.slice(item,1);
    } else {
      cart.push(item);
    }

  console.log(cart);
  console.log(cart.length);
}

//function sumPrices(cartArray) {
//  // for loop through array, sum value of price attribute for each object
//  var total = 0;
//  
//  for(var i=0; i<cartArray.length; i++){
//    
//      if(cartArray[i].price){
//  //    console.log(cartArray[i].price);
//      total = total + cartArray[i].price;
//    }
//  }
//  
//  console.log(total); //print the total near the cart instead of console logging it
//}

//<<<<<<< HEAD

// This function does not work as an array, it keeps reading as undefined. Why is this?
//function print(name, description, price) {
//  if (name == "") {
//    console.log(ERROR-name);
//    } else if (description == "") {
//      console.log(ERROR-descrition);
//    } else if (price < 0) {
//      console.log(ERROR-price);
//    } else {
//      console.log(name + ":" + description + "This product is $" + price + ".")
//    }
//}
//              
//print(products.name, products.description, products.price);
//=======
//TODO: Trigger on chage of cart contents


// This is the syntax for looping through arrays that we learned in class 1. We'll use it to loop through the products array.

//for(var i = 0; i<products.length; i++){
  
  // "i" here is a temporary variable that refers to the index of the object we're currently on while looping through the array.

  // We reference the element of the array that we're on using brackets
  // notation with the counter/i variable. That element is an object,
  // so we can refer to it's attributes using dot notation.
  
//  console.log(products[i].name);
//  console.log(products[i].description);
//  console.log(products[i].price);
//}

// Begin function for the form

// This function compares names
function compareName(a,b) {
    
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;   
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
}

//this function compares prices
function comparePrice(a,b){
      return a.price - b.price; console.log(products.sort(comparePrice));
    }

//This function is to call sort form values
function sortProduct(){ 
//    var sortPrice = selectObject.price;
    var compare = document.product.filter.value;
    
//    if(compare == 'price') {
//      console.log(products.sort(comparePrice));
//    } else if(compare == 'name') {
//      console.log(products.sort(compareName));
//    }else {
//      console.log('Nothing selected!');
//    }

// THE ABOVE IF/ELSE statment works as well, but I prefer to use switch statements for they are easier to read.
  
    switch(compare){
      case 'price':
        console.log(products.sort(compareName));
        break;
        
      case 'name':
        console.log(products.sort(comparePrice));
        break;
        
      default:
        console.log('ERROR: Code is broken somewhere');
        break;
        
    }
  
  event.preventDefault();
}

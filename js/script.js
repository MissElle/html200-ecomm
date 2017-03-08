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

var cart = '';

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

function sortProduct(){ 
//  THIS AREA WORKING
  function compareName(a,b) {
    
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;   
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
  
  console.log(products.sort(compareName));
    }

// THIS AREA WORKS, JUST NEED A WAY TO CALL SELECT VALUE, reading as undefined
    function comparePrice(a,b){
      return a.price - b.price; console.log(products.sort(comparePrice));
    }

  event.preventDefault();
}


function sumPrices(cartArray) {
  // for loop through array, sum value of price attribute for each object
  var total = 0;
  
  for(var i=0; i<cartArray.length; i++){
    
      if(cartArray[i].price){
  //    console.log(cartArray[i].price);
      total = total + cartArray[i].price;
    }
  }
  
  console.log(total); //print the total near the cart instead of console logging it
}
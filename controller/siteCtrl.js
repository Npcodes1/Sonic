//siteCtrl.js
//summon the "mock database file"
const gameInventory = require("../data/gameInventory");

// Refactoring the statement from if-else to try-catch statements will help us optimize our code

const allCharacters = async (request, response, next) => {
  try{
  //we can place the try before the if to be the "magic checkpoint"
  if (200) { //add await keyword
    await response.status(200).json({
        //reference the characters and show all of them
        success: {message: "reference the characters and show all of them" }, data: gameInventory, statusCode: 200
    })
  }
  //catch and detect errors - It should reflect the status of NOT FOUND in the status and the statusCode
  } catch (error) {
    response.status(404).json({
    // the server message needs to say "Resource not found. Search again."
    error: {message: "Resource not found."}
    })
  }
};


const charId = async (request, response, next) => {
  const { _id } = request.params; //store the request.params object in variable
    console.log(params); //console log variable. Read the server.

  const foundChar = gameInventory.find(gameInventory => gameInventorygameInventory._id === Number(_id));
 
//   response.json("Hello World");
    try {
    //we can place the try before the if to be the "magic checkpoint"

    //use a switch statement with the _id as the key, the Id strings as cases and a default message of "Character not found. Search again." 
    //Each number case has a message of "This is character number 1, 2, 3, etc". 
    //If the Id is not a number, say "Link to resource: data: {gameInventory}"
     switch (_id) {
        case "001":
            response.json("This is character number 1");
            break;
            case "001":
                response.json("This is character number 1");
                break;
            case "002":
                response.json("This is character number 3");
                break;
            case "003":
                response.json("This is character number 1");
                break;
            case "0a0b4c":
                response.json("Think to resource:", {data: {bookInventory}});
                break;
        default:
            break;
    }
        
     
   //catch and detect errors - It should reflect the status of NOT FOUND in the status and the statusCode
  } catch (error) {
    response.status().json({
    // the server message needs to say "Resource not found. Search again."
    })
  }
  };
  

//   const exit = async (request, response, next) => {
//     //The message should say: "You are closing the game dev application...".  It should reflect the status of OK in the status and the statusCode
//     response.status().json();
//   }
// };

//Use module.exports
module.exports = {allCharacters};
//--------------YA DONE---------------
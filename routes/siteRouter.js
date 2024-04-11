//siteRouter.js

//define express 
const express = require("express");


// Define express and router using express.Router()
const router = express.Router();


// Add the following to the constant variable where the controllers are summoned: {allCharacters, charId, exit} and require the siteController file
const {allCharacters, charId, /*exit*/} = require("../controller/siteCtrl");

// Stage a get route of /characters where there is a callback function allCharacters
router.get("/characters", allCharacters);


// Stage a get route of /characters/:_id where there is a callback function charId
router.get("/characters/:_id", charId);


// // Stage a get route of /exit where there is a callback function exit
// router.get("/exit", exit);



module.exports = router; //uses router everywhere!
// Make sure to export the router using module.exports()

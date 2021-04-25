//entry point to the API - ex:'/assgn-api'

/**
 * assgn-router.js
 * Router for assgn-api application
 * Project 3
 * Name: Wendy Prantner
 * COMP2150 Web Services
 */

 let router = require("express").Router();
 var controller = require("./assgn-controller.js");
 
 router.get("/", function (req, res) {
     res.json({
         status: "API is Working.",
         message: "Welcome to the Assignment API."
     });
 });
 
 router.route("/assgn")
     .get(controller.index)
     .post(controller.new);
 
 router.route("/assgn/:assgn_id")
     .get(controller.view)
     .put(controller.update)
     .delete(controller.delete);
 
 module.exports = router;
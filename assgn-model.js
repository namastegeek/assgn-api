//create model for the data the API will handle
//uses mongoose

const mongoose = require("mongoose");

var assgnSchema = mongoose.Schema({
	courseName: {
		type: String,
		required: true
	},
	assignmentName: {
		type: String,
		required: true
	},
	dueDate:{
		type: Date,
	}
});

var Assgn = module.exports = mongoose.model("assgn-model", assgnSchema);
module.exports.get = function (callback, limit) {
	Assgn.find(callback).limit(limit);
}

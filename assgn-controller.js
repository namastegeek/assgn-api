//import the model file 
//define all possible interactions with the data model, such as:
/**
 * 1. listing all the assignments
2. creating new assignments to store in the database
3. retrieving individual assignments
4. updating individual assignments
5. deleting individual assignments
 */

const Assgn = require("./assgn-model");

/**
 * Handle retrieval of all assignments
 * Corresponds to GET api/assgn
 * @param {*} req 
 * @param {*} res 
 */
exports.index = function (req, res) {
	Assgn.get(function (err, assgn) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Assignments retrieved successfully",
			data: assgn
		});
	});
}

/**
 * Handle create assignment actions 
 * Corresponds to POST api/assgn
 * @param {*} req 
 * @param {*} res 
 */
exports.new = function (req, res) {
    var assgn = new Assgn();
    assgn.courseName = req.body.courseName ? req.body.courseName : assgn.courseName;
    assgn.dueDate = req.body.dueDate;
    //assgn.email = req.body.email;
    //assgn.phone = req.body.phone;

// save the contact and check for errors
    contact.save(function (err) {
        if (err) {
            res.json(err);
		}
		res.json({
            message: 'New assignment created!',
            data: assgn
        });
    });
};

/**
 * Handle find contact using ID
 * Corresponds to GET /api/contacts/:contact_id
 * @param {*} req 
 * @param {*} res 
 */
exports.view = function (req, res) {
    Assgn.findById(req.params.assgn_id, function (err, assgn) {
        if (err) {
            res.send(err);
		}
        res.json({
            message: 'Assignment details loading..',
            data: assgn
        });
    });
};

/**
 * Handle update contact
 * Corresponds to PUT /api/contacts/:contact_id
 * @param {*} req 
 * @param {*} res 
 */
exports.update = function (req, res) {
	Assgn.findById(req.params.assgn_id, function (err, assgn) {
        if (err) {
            res.send(err);
		}
		assgn.assgnName = req.body.courseName ? req.body.courseName : contact.courseName;
        assgn.dueDate = req.body.dueDate;
       // assgn.email = req.body.email;
       // assgn.phone = req.body.phone;
       
// save the assgn and check for errors
        assgn.save(function (err) {
            if (err) {
                res.json(err);
			}
            res.json({
                message: 'Assignment Info updated',
                data: assgn
            });
        });
    });
};

/**
* Handle delete contact
* Corresponds to DELETE /api/contacts/:contact_id
* @param {*} req 
* @param {*} res 
*/
exports.delete = function (req, res) {
    Assgn.remove({
        _id: req.params.assgn_id
    }, function (err, assgn) {
        if (err) {
            res.send(err);
		}
		res.json(
			{
				status: "success",
				message: 'Assignment deleted'
			});
    });
};

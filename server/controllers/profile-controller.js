var User = require('../datasets/users');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req, res){
	var file = req.body.file;
	var userId = req.body.userId;
	console.log("User " + userId + " is submitting " , file);
}

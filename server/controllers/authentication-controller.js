var User = require('../datasets/users');

module.exports.signup = function(req, res){
	var user = new User(req.body);
	user.save();

	res.json(req.body);
}

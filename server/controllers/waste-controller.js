var Waste = require('../datasets/wastes');

module.exports.postWaste = function(req, res){
	var waste = new Waste(req.body);
	waste.save();

	Waste.find({}, function(err, allWastes){
		if (err){
			res.error(error);
		} else {
			res.json(allWastes);
		}
	})
}

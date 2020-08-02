const distance = require('../data/distance.json');
require('./directTrainsBetweenTwoStations');
require('../algorithms/directTrainsBetweenTwoStations.js')();

module.exports = function() {
	this.utsTrainFinder = (origin, destination, via, day, date) => {
		const trains = directTrainsBetweenTwoStations(origin, destination, day, date);

		var candidates = [];

		for (key in trains) {
			if (via in distance[trains[key].number]) {
				candidates.push(trains[key]);
			}
		}

		return candidates;
	};
};

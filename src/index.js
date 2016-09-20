var checkDate = function(strDate, callback){
	var comp = strDate.split('/');
	var d = parseInt(comp[0], 10);
	var m = parseInt(comp[1], 10);
	var y = parseInt(comp[2], 10);
	if (isNaN(d) || isNaN(m) || isNaN(y)) {
		var err = new Error('input must be a type date');
		return callback(err);
	}
	var date = new Date(y,m-1,d);
	if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
		return callback(null, true);
	};
	callback(null, false);
}

module.exports = {
	checkDate: checkDate
}
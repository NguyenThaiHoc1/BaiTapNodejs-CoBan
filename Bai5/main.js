var fs = require("fs");
var path = require("path");
var testing_Asy = fs.readdir(process.argv[2], function 	(err, files) {
	if(err) throw err;
	for (var i = 0; i < files.length; i++) {
		var Template = path.extname(files[i]);
		var array = Template.split('.');
		if(array[1] == process.argv[3]){
			console.log(files[i]);
		}
	}
});
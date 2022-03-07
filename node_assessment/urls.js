const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
	fs.readFile(path, 'utf8', function(err, data) {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		// console.log(`file contents: ${data}`);
		webCat(data);
	});
}

async function webCat(data) {
	let urls = data.split('\n');
	for (let url of urls) {
		let response = await axios.get(url);
		// console.log(response.data);
		handleOutput(response.data, output);
		console.log(`Writing to ${url}.txt`);
	}
}

function handleOutput(text, output) {
	if (output) {
		fs.writeFile(output, text, 'utf8', function(err) {
			if (err) {
				console.error(`Couldn't write ${output}: ${err}`);
			}
		});
	} else {
		console.log(text);
	}
}

let output = '/Users/davidbroida/Desktop/coding/JavaScript_2/Node/node_assessment/output.txt';

cat(process.argv[2]);
// console.log(process.argv);

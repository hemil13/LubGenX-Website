const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./LubGenX Legal Documents.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('./pdf_text.txt', data.text);
    console.log('PDF text extracted');
}).catch(function(error) {
    console.error(error);
});

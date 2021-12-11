const path = require("path"); 
const fs = require("fs"); 

//paintings
// for now, we will get our data by reading the provided json file
const jsonPaintPath = path.join(__dirname, '../data',
    'paintings-nested.json');
const jsonPaintData = fs.readFileSync(jsonPaintPath, 'utf8');
// convert string data into JSON object
const paintings = JSON.parse(jsonPaintData);

//artists
const jsonArtPath = path.join(__dirname, '../data',
    'artists.json');
const jsonArtData = fs.readFileSync(jsonArtPath, 'utf8');
// convert string data into JSON object
const artists = JSON.parse(jsonArtData);

//galleries
const jsonGallyPath = path.join(__dirname, '../data',
    'galleries.json');
const jsonGallyData = fs.readFileSync(jsonGallyPath, 'utf8');
// convert string data into JSON object
const gallery = JSON.parse(jsonGallyData);

module.exports = {paintings,artists,gallery};
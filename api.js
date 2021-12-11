const path = require('path');
const express = require('express');

// create an express app
const app = express();

// tell node to use json and HTTP header features 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//json module
const data = require('./scripts/data-provider.js');
const paintings = data.paintings;
const artists = data.artists;
const gallery = data.gallery;

const paintingRouter = require('./scripts/painting-router.js');
const artistRouter = require('./scripts/artist-router.js');
const galleryRouter = require('./scripts/gallery-router.js');

paintingRouter.allPaintings(paintings, app);
paintingRouter.getPaintingBetweenYears(paintings, app);
paintingRouter.getPaintingByArtist(paintings, app);
paintingRouter.getPaintingByColor(paintings, app);
paintingRouter.getPaintingByGallery(paintings, app);
paintingRouter.getPaintingByID(paintings, app);
paintingRouter.getPaintingByText(paintings, app);

artistRouter.allArtists(artists, app);
artistRouter.countryArtists(artists, app);

galleryRouter.allGalleries(gallery, app);
galleryRouter.countryGalleries(gallery, app);

app.use('/api',
    express.static(path.join(__dirname, 'data')));

// temp local host
// Use express to listen to port
const port = process.env.PORT||8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});

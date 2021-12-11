const jsonMessage = (msg) => {
    return { message: msg };
};

const allPaintings = (paintings, app) => {
    app.get('/api/paintings', (req, resp) => { resp.json(paintings) });
};

const getPaintingByID = (paintings, app) => {
    app.get('/api/paintings/:paintingID', (req, resp) => {
        const paintToFind = req.params.paintingID;
        const matches = paintings.filter(obj => obj.paintingID == paintToFind);
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`${paintToFind} Not found`));
        }
    });
};

const getPaintingByGallery = (paintings, app) => {
    app.get('/api/paintings/gallery/:galleryID', (req, resp) => {

        const paintToFind = req.params.galleryID;
        const matches = paintings.filter((obj) => obj.gallery.galleryID == paintToFind);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`${paintToFind} Not found`));
        }
    });
};

const getPaintingByArtist = (paintings, app) => {
    app.get('/api/paintings/artist/:artistID', (req, resp) => {
        const paintToFind = req.params.artistID;
        const matches = paintings.filter((obj) => obj.artist.artistID == paintToFind);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`${paintToFind} Not found`));
        }
    });
};

const getPaintingBetweenYears = (paintings, app) => {
    app.get('/api/paintings/year/:min/:max', (req, resp) => {
        const min = req.params.min;
        const max = req.params.max;

        const matches = paintings.filter((obj) => obj.yearOfWork >= min && obj.yearOfWork <= max);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`No paintings found`));
        }
    });
};

const getPaintingByText = (paintings, app) => {
    app.get('/api/paintings/title/:text', (req, resp) => {
        const substring = req.params.text.toLowerCase();
        const matches = paintings.filter((obj) =>
            obj.title.toLowerCase().includes(substring));
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`No results found for ${substring}`));
        }
    });
};

const getPaintingByColor = (paintings, app) => {
    app.get('/api/paintings/color/:name', (req, resp) => {
        const color = req.params.name.toLowerCase();
        const matches = paintings.filter((obj) =>
            obj.details.annotation.dominantColors.web.toLowerCase() === (color));
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`${color} Not found`));
        }
    });
};

module.exports = {
    allPaintings,
    getPaintingByID,
    getPaintingByGallery,
    getPaintingByArtist,
    getPaintingBetweenYears,
    getPaintingByText,
    getPaintingByColor
};
const jsonMessage = (msg) => {
    return { message: msg };
};

const allGalleries = (gallery, app) => {
    app.get('/api/galleries', (req, resp) => { resp.json(gallery) });
};

const countryGalleries = (gallery, app) => {
    app.get('/api/galleries/:GalleryCountry', (req, resp) => {
        const CountryToFind = req.params.GalleryCountry.toLowerCase();
        const matches = gallery.filter((obj) =>
            obj.GalleryCountry.toLowerCase() === CountryToFind);
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`No ${CountryToFind} Galleries found`));
        }
    });
};

module.exports = {
    allGalleries,
    countryGalleries
};
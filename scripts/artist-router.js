const jsonMessage = (msg) => {
    return { message: msg };
};

const allArtists = (artists, app) => {
    app.get('/api/artists', (req, resp) => { resp.json(artists) });
};

const countryArtists = (artists, app) => {
    app.get('/api/artists/:Nationality', (req, resp) => {
        const NationalityToFind = req.params.Nationality.toLowerCase();
        const matches = artists.filter((obj) =>
            obj.Nationality.toLowerCase() === NationalityToFind);
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`No ${NationalityToFind} Artists found`));
        }
    });
};

module.exports = {
    allArtists,
    countryArtists
};
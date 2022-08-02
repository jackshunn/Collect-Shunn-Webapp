const fetch = require('node-fetch')

module.exports = async function (context, req) {

    let promiseList = [];
    if(!req.body || !req.body.keywords)
        throw new Error("Invalid request");

    if(req.body.movies){
        const imdbPromise = fetch(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_API_KEY}}/${req.body.keywords}`);
        promiseList.push(imdbPromise);
    }
    if(req.body.books){
        const googleBooksPromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${req.body.keywords}`);
        promiseList.push(googleBooksPromise);
    }
    if(req.body.songs){
        const spotifyPromise = fetch(`https://api.spotify.com/v1/search?q=${req.body.keywords}&type=track&`);
        promiseList.push(spotifyPromise);
    }
    
    let resultingJSON;
    Promise.all(promiseList).then(resolvedPromises => resultingJSON = resolvedPromises.map(item => item.json()))

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            spotify: resultingJSON[2],
            imdb: resultingJSON[0],
            googleBooks: resultingJSON[1]
        }
    };
}
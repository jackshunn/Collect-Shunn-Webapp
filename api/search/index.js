const fetch = require('node-fetch');

async function callAPI(url){
    const promise = await fetch(
        url,
        {method:"GET"});
    return await promise.json(); 
}


module.exports = async function (context, req) {
    if(!req.body || !req.body.keywords)
        throw new Error("Invalid request");

    let promiseList = [];
    let nameList =[];

    if(req.body.movies){
        promiseList.push(
            callAPI(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_API_KEY}/${req.body.keywords}`)
        )
        nameList.push("imdb");
    }

    if(req.body.books){
        promiseList.push(
            callAPI(`https://www.googleapis.com/books/v1/volumes?q=${req.body.keywords}`)
        )
        nameList.push("googleBooks");
    }

    if(req.body.songs){
        promiseList.push(
            callAPI(`https://api.spotify.com/v1/search?q=${req.body.keywords}&type=track&`)
        )
        nameList.push("spotify");
    }
    
    let resultingJSON = await Promise.all(promiseList);

    let resultObject ={};
    resultingJSON.forEach((value, index) => resultObject[nameList[index]] = value )
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resultObject
    };
}
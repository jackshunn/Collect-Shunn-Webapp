// const fetch = require('node-fetch');
// const ITEM_LIMIT = 5;

// async function formatImdbResponse(searchJSON){
//     const addPlotInfo = async (id, movieObject) => { 
//         const promise = await fetch(
//         `https://imdb-api.com/en/API/Title/${process.env.IMDB_API_KEY}/${id}`,
//         {method:"GET"});
//         const titleJSON = await promise.json();
        
//         movieObject.text = titleJSON.plot;
//         return movieObject;
//         };
//     const loopLength = Math.min(ITEM_LIMIT, searchJSON.results.length);
//     let promiseList = [];

//     for(let i=0; i < loopLength; i++){
//         const {id, image, title, description} = searchJSON.results[i];
//         let movieObject = {
//             image:image,
//             title:title,
//             year:description.slice(1,5),
//             link:`https://www.imdb.com/title/${id}`
//         }

//         promiseList.push(addPlotInfo(id, movieObject));
//     }

//     return await Promise.all(promiseList);
// }

// function formatGoogleBooksResponse(searchJSON){
//     return searchJSON.items.map((book) => {
//         return {
//             title: book.volumeInfo.title + (book.volumeInfo.subtitle ? ": " + book.volumeInfo.subtitle : ""),
//             year: book.volumeInfo.publishedDate.slice(0,4),
//             author: book.volumeInfo?.authors?.[0] ?? "~No Author~",
//             link: `http://books.google.com/books?id=${book.id}`,
//             image: book.volumeInfo.imageLinks.thumbnail,
//             pageCount: book.volumeInfo.pageCount.toString(),
//             text: book.volumeInfo.description
//         }
//     });
// }

// function formatSpotifyResponse(searchJSON){
//     return searchJSON.tracks.items.map((track) => {
//         return {
//             title: track.name,
//             year: track.album.release_date,
//             artist: track.artists[0].name,
//             link: track.external_urls.spotify,
//             image: track.album.images[0].url,
//             album: track.album.name,
//         }
//     })
// }

// async function callImdbAPI(query){
//     const promise = await fetch(
//         `https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_API_KEY}/${query}`,
//         {method:"GET"});
//     return await formatImdbResponse(await promise.json()); 
// }

// async function callGoogleBooksAPI(query){
//     const promise = await fetch(
//         `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${ITEM_LIMIT}`,
//         {method:"GET"});
//     return await promise.json().then(formatGoogleBooksResponse); 
// }

// async function callSpotifyAPI(query){
//     const authRequest = await fetch(
//         "https://accounts.spotify.com/api/token",
//         {
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/x-www-form-urlencoded",
//                 Authorization:"Basic " + process.env.SPOTIFY_APP_SECRET
//             },
//             body: "grant_type=client_credentials"
//         }
//     );
//     const authJSON = await authRequest.json(); 
//     const access_token = authJSON.access_token;
    
//     const promise = await fetch(
//         `https://api.spotify.com/v1/search?q=${query}&type=track&limit=${ITEM_LIMIT}`,
//         {
//             method:"GET",
//             headers:{
//                 Authorization:"Bearer " + access_token
//             }
//         });
//     return await promise.json().then(formatSpotifyResponse); 
// }


module.exports = async function (context, req) {
    context.res.json({
        error: context,
        stack: req
    });
}
//     return;
//     try{
//        if(!req.body || !req.body.keywords)
//         throw new Error("Invalid request");

//         let promiseList = [];
//         let nameList =[];

//         if(req.body.movies){

//             promiseList.push(
//                 callImdbAPI(req.body.keywords)
//             )
//             nameList.push("imdb");
//         }

//         if(req.body.books){
//             promiseList.push(
//                 callGoogleBooksAPI(req.body.keywords)
//             )
//             nameList.push("googleBooks");
//         }

//         if(req.body.songs){
//             promiseList.push(
//                 callSpotifyAPI(req.body.keywords)
//             )
//             nameList.push("spotify");
//         }
        
//         let resultingJSON = await Promise.all(promiseList);

//         let resultObject ={};
//         resultingJSON.forEach((value, index) => resultObject[nameList[index]] = value )
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: resultObject
//         }; 
//     } 
//     catch (error) {
//         context.res = {
//             error: error.message,
//             stack: error.stack
//         }
//     }
    
// }
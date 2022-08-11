export default async function callSearchAPI(keywords, searchTypes, callBackFunction){
    const body = {
        "keywords":keywords,
        "movies":searchTypes.movies ?? false,
        "books":searchTypes.books ?? false,
        "songs":searchTypes.songs ?? false
    }
    const searchResults = await fetch("/api/search",
    {
        method:"POST",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify(body)
    });
    const searchResultsJSON = await searchResults.json();
    callBackFunction(searchResultsJSON);
}
export default async function getData(userID){
    const searchResults = await fetch(`/api/data?userID=${userID}`,
    {
        method:"GET",
    });
    
    return await searchResults.json()
}

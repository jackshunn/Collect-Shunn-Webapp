export default async function getData(){
    const searchResults = await fetch("/api/data",
    {
        method:"GET",
    });
    
    return await searchResults.json()
}
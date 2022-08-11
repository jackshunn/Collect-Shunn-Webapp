export default async function saveDataToDB(dataToSave){
    await fetch("/api/data",
    {
        method:"POST",
        body: JSON.stringify(dataToSave)
    });   
}
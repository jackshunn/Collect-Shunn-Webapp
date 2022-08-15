export default async function saveDataToDB(dataToSave){
    await fetch(`/api/data?userID=${dataToSave.id}`,
    {
        method:"POST",
        body: JSON.stringify(dataToSave)
    });   
}
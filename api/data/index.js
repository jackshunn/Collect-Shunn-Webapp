const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseID = 'users-data';
const containerID= 'data';

function createNewItem(container, userID){
    const newUserObject = {
        id: userID,
        lists: []
    }
    
    container.items.create(
        newUserObject,
        {disableAutomaticIdGeneration: false}
    )
    return newUserObject;
}

module.exports = async function (context, req) {
    
    const { database } = await client.databases.createIfNotExists({ id: databaseID });

    const { container } = await database.containers.createIfNotExists({ id: containerID });

    const item =  await container.item(req.query.userID, req.query.userID);
    switch (req.method) {
        case "GET":
            const {resource} = await item.read();
            if(resource){
                context.res.json(resource); 
            }
            else {
                context.res.json(createNewItem(container, req.query.userID));
            }
            break;
        case "POST":
            await item.replace(req.body);
            break;
        default:
            context.res = {
                status: 405,
                body: "Method Not Allowed"
            }
    }   
}
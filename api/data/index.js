const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseID = 'users-data';
const containerID= 'data';

module.exports = async function (context, req) {
    
    const { database } = await client.databases.createIfNotExists({ id: databaseID });

    const { container } = await database.containers.createIfNotExists({ id: containerID });

    const item =  await container.item("jackshunn", "jackshunn");
    switch (req.method) {
        case "GET":
            const {resource} = await item.read();
            context.res.json({
                ...resource
            });
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
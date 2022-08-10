const { CosmosClient } = require('@azure/cosmos');


const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseID = 'users-data';
const containerID= 'data';
// partitionKey: { kind: 'Hash', paths: ['/secrets'] },


module.exports = async function (context, req) {
    
    const { database } = await client.databases.createIfNotExists({ id: databaseID });

    const { container } = await database.containers.createIfNotExists({ id: containerID });

    const item =  await container.item("jackshunn", "jackshunn");
    const {resource} = await item.read();
    context.log(resource);

    
    context.res.json({
        ...resource
    });
}
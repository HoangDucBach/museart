const fs = require('fs');
const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'museartdb',
    password: 'hoangbach02',
    port: 5432, // Số cổng mặc định của PostgreSQL
});
let c=0;
const table='videos'
async function main() {
    try {
        await client.connect();
        const directoryPath = 'C:/Users/Bach/Desktop/artic-api-data/artic-api-data/json/'+table;
        const files = fs.readdirSync(directoryPath);
        for (const file of files) {
            const filePath = `${directoryPath}/${file}`;
            const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const query = `INSERT INTO ${table} (detail) VALUES ($1)`;
            const values = [jsonData];
            await client.query(query, values);
        }

        console.log('imported');
    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
}

main();
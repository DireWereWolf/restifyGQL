import * as mongoose from 'mongoose';

const host = 'localhost';
const port = 27017;
const dbName = 'restifyGQL';

mongoose.Promise = global.Promise;
mongoose.createConnection(`mongodb://${host}:${port}/${dbName}`);

const db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')});
db.once('open', () => {
    console.log( '+++Connected to mongoose')
});

export default db;
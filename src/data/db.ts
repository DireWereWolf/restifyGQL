import * as mongoose from 'mongoose';
import User from "./User/User.model";

const host = 'localhost';
const port = 27017;
const dbName = 'restifyGQL';

// mongoose.Promise = global.Promise;
// mongoose.createConnection(`mongodb://${host}:${port}/${dbName}`);
//
// const db: any = mongoose.connection;
// db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')});
// db.once('open', () => {
//     console.log( '+++Connected to mongoose')
// });
//
// export default db;

class DataBase {
    constructor() {
        this.database()
            .then(result => console.log('connected ', result))
            .then(() => this.check())
            .catch(err => console.log(err));
    }

    private database(): Promise<string> {
        return new Promise((resolve, reject) => {
            console.log('Connecting to Data base');
            mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
            mongoose.connection.on('error', (err) => {
                console.log('MongoDB connection error. Please make sure MongoDB is running.', err);
                reject('No connection for db');
            });

            resolve(`Connected on: mongodb://${host}:${port}/${dbName}`);
        });
    };

    private check(): Promise<User[]> {
        return new Promise(async (resolve) => {
            const users = await User.find({});

            if (!users.length) {
                const newUser = new User({
                    name: "Johny",
                    email: "huy@van",
                    password: "123"
                });
                User.create(newUser, (err, user) => {
                    if (err) return new Error(err);

                    resolve(user);
                });
            }

            resolve(users);
        })
    }
}

export default DataBase;
import db from '../db';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);
export default User;

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// }, {
//     collection: 'users'
// });
//
// db.model('User', UserSchema);
//
// const User = db.model('User');
//
// export default User;


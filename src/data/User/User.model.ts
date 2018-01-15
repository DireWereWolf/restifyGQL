import db from '../db';
import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {
    collection: 'users'
});

db.model('User', UserSchema);

const User = db.model('User');

export default User;
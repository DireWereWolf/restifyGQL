import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

export default User;


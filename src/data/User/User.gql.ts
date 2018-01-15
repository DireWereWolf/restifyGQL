import * as graphql from 'graphql';
import User from './User.model';

interface args {
    _id: string
}

const userType = `
    type Users {
        users:[User]
    }
    type User {
        _id: String!
        name: String
        email: String
    }
`;

export const userResolver = (root:any, args:any, ctx:any) => {
    console.log(args.id, ctx);

    User.findOne({name: args.name}, 'first', function (err, doc){
        console.log(err, doc);
        if (!err) {
            console.log('try to find, no err');
        }
    });
    return {
        name: 'fake',
        email: 'fake'
    }
};

export const usersResolver = () => User.find();

export default userType;
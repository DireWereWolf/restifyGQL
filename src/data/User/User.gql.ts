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

export async function userResolver(root:any, args:any, ctx:any): Promise<any> {
    console.log('user resolver');
    //args.id = 'Johny';
    return await User.findOne({name: args.id}, (err: Error, doc: User) => {
        console.log('sdasdasdas', doc);
        if (err) {
            console.log('try to find, no err');
            return new Error(err);
        }
        return doc;
    });
};

export const usersResolver = () => User.find();

export default userType;

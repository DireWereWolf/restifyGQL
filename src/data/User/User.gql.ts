import User from './User.model';

interface args {
    _id: string
}

const userType = `
    type User {
        _id: String!
        name: String
        email: String
    }
`;

export const userResolver = async function (root:any, args:any, ctx:any): Promise<any> {
    return await User.findOne({_id: args.id}, (err: Error, doc: any) => {
        console.log(args.id, doc);
        if (err) {
            return new Error(err);
        }
        return doc;
    });
};

export const usersResolver = async function(root:any, args:any, ctx:any) {
    return await User.find({}, (err, doc) => {
        if (err) {
            return new Error(err);
        }
        return doc;
    });
};

export default userType;

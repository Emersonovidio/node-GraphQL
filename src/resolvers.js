const users = [
    { id: 1, name: 'Emerson', email: 'emerson@graphql.com'},
    { id: 2, name: 'Xpto', email: 'xpto@graphql.com'}        

];

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0],
    }, 
    Mutation: {
        createUser: () => users[0],
    },
}
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;
const axios = require('axios');


const UserType = new GraphQLObjectType({
  name: 'User',
  fields:{
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt}
  }
});


const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentVal, args) {

        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(response => response.data);
      }
    }
  }
}); 

module.exports = new GraphQLSchema({
  query: rootQuery
})


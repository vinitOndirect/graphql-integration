const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Todo{
        id: ID!
        title: String!
        subtitle: String
        completed: Boolean!
        createdby: String!
        }

    type Query{ 
        todos: [Todo]
        todo(id: ID!): Todo
    }        
    type Mutation{
        addTodo(title: String!, subtitle: String, createdby:String!): Todo
        updateTodo(id: ID!, title: String, subtitle: String, completed: Boolean): Todo
        deleteTodo(id: ID!): Boolean
    }        
    `);

module.exports = schema;

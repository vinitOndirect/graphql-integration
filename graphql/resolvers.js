const Todo = require("../models/todos.models");

const resolvers = {
  todos: async () => await Todo.findAll(),
  todo: async ({ id }) => await Todo.findByPk(id),

  addTodo: async ({ title, subtitle, createdby }) => {
    return await Todo.create({ title, subtitle, createdby });
  },

  updateTodo: async ({ id, title, subtitle, completed }) => {
    const todo = await Todo.findByPk(id);
    if (!todo) return null;
    await todo.update({ title, subtitle, completed });
    return todo;
  },

  deleteTodo: async ({ id }) => {
    const todo = await Todo.findByPk(id);
    if (!todo) return false;
    await todo.destroy();
    return true;
  },
};

// optional for bigger projects
// const queries= require("./graphql/queries")
// const mutations= require("./graphql/mutations")
// module.exports= {...queries, ...mutations}

module.exports = resolvers;

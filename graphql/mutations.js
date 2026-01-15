//
// оптионал цоде фор мутатион алоне
// NOTE Mutations are CREATE DELETE & UPDATE operations

// module.exports= {
//   addTodo: async ({ title, subtitle, createdby }) => {
//     return await Todo.create({ title, subtitle, createdby });
//   },
//  updateTodo: async ({ id, title, subtitle, completed }) => {
//     const todo = await Todo.findByPk(id);
//     if (!todo) return null;
//     await todo.update({ title, subtitle, completed });
//     return todo;
//   },

//   deleteTodo: async ({ id }) => {
//     const todo = await Todo.findByPk(id);
//     if (!todo) return false;
//     await todo.destroy();
//     return true;
//   },
// }
//

// If you wanna hit this in postman below is the syntax for the crud

// NOTE- every request should be invoked under **POST** request
// send json raw req.body

// ----------------------------------Queries----------------------------------------
// Get all Todos
// // json - {
// "query": "{todos {id title subtitle createdby completed}}"
// }

// here- todos-> is the resolver we're invoking which is taking no params -> and the next object is the keys we *WANT*

// Get a single Todo
// // json - {
// "query": "{todo(id: 1) {id title subtitle createdby completed}}"
// }

// same as last just that we take id as a parameter

// ----------------------------------Mutations----------------------------------------
// syntax - "mutation {mutation-resolver(param1, param2) {returning keys}"

// Add a todo
// // json - {
// "query": "mutation {addTodo(title: \"First todo title\", createdby: \"Vinit\", subtitle:\"Forsen\") {title createdby subtitle}}"
// }

// Update a todo
// // json - {
// "query": "mutation {updateTodo(id: 1, title: \"updating title1\", completed: true) {title createdby subtitle}}"
// }

// Delete a todo
// // json - {
// "query": "mutation {deleteTodo(id: 1)}"
// }

// functions for reference
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

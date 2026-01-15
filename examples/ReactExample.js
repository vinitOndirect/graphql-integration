// services/todoApi.js
const GRAPHQL_ENDPOINT = "http://localhost:4000/graphql";

// Generic function to hit GraphQL endpoint
async function graphqlRequest(query, variables = {}) {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }
  return json.data;
}

// ------------------- Queries -------------------

// Get all todos
export async function getTodos() {
  const query = `
    {
      todos {
        id
        title
        subtitle
        createdby
        completed
      }
    }
  `;
  const data = await graphqlRequest(query);
  return data.todos;
}

// Get a single todo by ID
export async function getTodoById(id) {
  const query = `
    query ($id: ID!) {
      todo(id: $id) {
        id
        title
        subtitle
        createdby
        completed
      }
    }
  `;
  const data = await graphqlRequest(query, { id });
  return data.todo;
}

// ------------------- Mutations -------------------

// Add a new todo
export async function addTodo(title, subtitle, createdby) {
  const mutation = `
    mutation ($title: String!, $subtitle: String, $createdby: String!) {
      addTodo(title: $title, subtitle: $subtitle, createdby: $createdby) {
        id
        title
        subtitle
        createdby
        completed
      }
    }
  `;
  const data = await graphqlRequest(mutation, { title, subtitle, createdby });
  return data.addTodo;
}

// Update a todo
export async function updateTodo(id, title, subtitle, completed) {
  const mutation = `
    mutation ($id: ID!, $title: String, $subtitle: String, $completed: Boolean) {
      updateTodo(id: $id, title: $title, subtitle: $subtitle, completed: $completed) {
        id
        title
        subtitle
        createdby
        completed
      }
    }
  `;
  const data = await graphqlRequest(mutation, {
    id,
    title,
    subtitle,
    completed,
  });
  return data.updateTodo;
}

// Delete a todo
export async function deleteTodo(id) {
  const mutation = `
    mutation ($id: ID!) {
      deleteTodo(id: $id)
    }
  `;
  const data = await graphqlRequest(mutation, { id });
  return data.deleteTodo;
}

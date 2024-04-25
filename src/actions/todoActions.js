import axios from "axios";

// Fetch todos
export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  dispatch({
    type: "FETCH_TODOS",
    payload: response.data,
  });
};

// Add todo
export const addTodo = (todo) => async (dispatch) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  dispatch({
    type: "ADD_TODO",
    payload: response.data,
  });
};

// Update todo
export const updateTodo = (id, updatedTodo) => async (dispatch) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    updatedTodo
  );
  dispatch({
    type: "UPDATE_TODO",
    payload: response.data,
  });
};

// Delete todo
export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  dispatch({
    type: "DELETE_TODO",
    payload: id,
  });
};

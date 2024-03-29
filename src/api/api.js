import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

export const getTodos = async () => {
  const todos = await axios.get("todos");
  return todos.data;
};

export const getSingleTodo = async (id) => {
  const todos = await axios.get(`todos/${id}`);
  return todos.data;
};

export const editTodo = async (id, payload) => {
  const editTodo = await axios.patch(`/todos/${id}`, payload);
  return editTodo.data;
};

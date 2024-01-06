import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

const getTodos = async () => {
  const todos = await axios.get("todos");
  return todos.data;
};

export default getTodos;

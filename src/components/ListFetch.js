import { useEffect, useState } from "react";
import ListFetchItem from "./ListFechItem";
import { useFetch } from "../hooks/useFetch";
import { Context } from "../Context";
import axios from "axios";

const ListFetch = () => {
  const [completed, setCompleted] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    todosName: "",
    todosDesc: "",
  });
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  const { data: todos, isLoading, error } = useFetch("todos");

  useEffect(() => {
    setData(todos);
  }, [todos]);

  const onHandleChangeName = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, todosName: value });
  };
  const onHandleChangeDesc = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, todosDesc: value });
  };

  const addTodo = async () => {
    if (inputValue.todosName === "" || inputValue.todosDesc === "") {
      alert("inputs can not be empty");
      return;
    }
    setIsPostLoading(true);
    const payload = {
      title: inputValue.todosName,
      description: inputValue.todosDesc,
      checked: false,
      creationDate: Date.now(),
    };
    const responce = await axios.post("todos", payload);
    setData((prev) => [...prev, responce.data]);
    setIsPostLoading(false);
    setInputValue({
      todosName: "",
      todosDesc: "",
    });
  };

  const deleteTodo = async (id) => {
    setData(data.filter((item) => item.id !== id));
    await axios.delete(`todos/${id}`);
  };

  const toggleTodo = async (id) => {
    const todo = data.find((item) => item.id === id);
    if (!todo.checked) {
      setCompleted(true);
      const payload = {
        checked: true,
      };
      const responce = await axios.patch(`todos/${id}`, payload);
      setData(
        data.map((item) =>
          item.id === id ? { ...item, checked: responce.data.checked } : item
        )
      );
      setCompleted(false);
    } else {
      setCompleted(true);
      const payload = {
        checked: false,
      };
      const responce = await axios.patch(`todos/${id}`, payload);
      setData(
        data.map((item) =>
          item.id === id ? { ...item, checked: responce.data.checked } : item
        )
      );
      setCompleted(false);
    }
  };

  const filteredList = () => {
    switch (filter) {
      case "active":
        return data.filter((todo) => !todo.checked);
      case "done":
        return data.filter((todo) => todo.checked);
      default:
        return data;
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Context.Provider
      value={{
        deleteTodo,
        toggleTodo,
        completed,
      }}
    >
      <div>
        <div className="inputs">
          <input
            className="input-todo"
            type="text"
            onChange={onHandleChangeName}
            value={inputValue.todosName}
          />
          <input
            className="input-todo"
            type="text"
            onChange={onHandleChangeDesc}
            value={inputValue.todosDesc}
          />
        </div>
        <button onClick={addTodo} disabled={isPostLoading}>
          {isPostLoading ? "loading..." : "Add todo"}
        </button>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul className="select-list">
              <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
              </select>
            </ul>
            <ul>
              {filteredList().map((item) => (
                <ListFetchItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </Context.Provider>
  );
};

export default ListFetch;

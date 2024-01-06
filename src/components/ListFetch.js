import { useEffect, useState } from "react";
import ListFetchItem from "./ListFechItem";

import { useFetch } from "../hooks/useFetch";

const ListFetch = () => {
  const [inputValue, setInputValue] = useState({
    todosName: "",
    todosDesc: "",
  });
  //   const [filter, setFilter] = useState("all");

  const { data: todos, isLoading, error } = useFetch("todos");

  const onHandleChangeName = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, todosName: value });
  };

  const onHandleChangeDesc = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, todosDesc: value });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
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
      <button>Add one</button>
      {/* <ul>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="done">Done</option>
        </select>
      </ul> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.map((item) => <ListFetchItem key={item.id} {...item} />)
      )}
    </div>
  );
};

export default ListFetch;

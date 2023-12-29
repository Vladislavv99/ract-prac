import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Context } from "./Context";

function List() {
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("arr")) || [
      { id: nanoid(), name: "Vasia", completed: false },
      { id: nanoid(), name: "Piter", completed: false },
      { id: nanoid(), name: "Kolia", completed: false },
    ]
  );
  const [item, setItem] = useState("");

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(arr));
  }, [arr]);

  const onHandleClick = (item) => {
    if (item === "") {
      alert("Input can not be empty");
      return;
    }
    const updatedArr = [...arr, { id: nanoid(), name: item, completed: false }];
    setArr(updatedArr);
    setItem("");
  };

  const onHandleChange = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  const onClickEnter = (e) => {
    if (e.key === "Enter") {
      onHandleClick(e.target.value);
    }
  };

  const deleteItem = (id) => {
    setArr(arr.filter((name) => name.id !== id));
  };

  const toggleTodo = (id) => {
    setArr(
      arr.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const onSelectChange = (e) => {
    if (e.target.value === "active") {
      const filteredArr = arr.filter((todo) => todo.completed !== true);
      setArr(filteredArr);
    }
  };

  return (
    <Context.Provider
      value={{
        toggleTodo,
        deleteItem,
      }}
    >
      <div>
        <input
          type="text"
          onKeyDown={onClickEnter}
          onChange={onHandleChange}
          value={item}
        />
        <ul>
          <select onChange={onSelectChange}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="done">Done</option>
          </select>
          {arr.length === 0 ? (
            <p className="no-item">No item in list</p>
          ) : (
            arr.map((item) => <ListItem key={item.id} {...item} />)
          )}
          <button onClick={() => onHandleClick(item)}>Add one</button>
        </ul>
      </div>
    </Context.Provider>
  );
}

export default List;

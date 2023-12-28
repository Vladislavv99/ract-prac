import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function List() {
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("arr")) || [
      { id: nanoid(), name: "Vasia" },
      { id: nanoid(), name: "Piter" },
      { id: nanoid(), name: "Kolia" },
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
    const updatedArr = [...arr, { id: nanoid(), name: item }];
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

  const onDeleteClick = (id) => {
    const updatedNameList = arr.filter((name) => name.id !== id);
    setArr(updatedNameList);
  };

  return (
    <ul>
      <input
        type="text"
        onKeyDown={onClickEnter}
        onChange={onHandleChange}
        value={item}
      />
      {arr.length === 0 ? "" : <p>{arr.length}</p>}
      {arr.length === 0 ? (
        <p className="no-item">No item in list</p>
      ) : (
        <ListItem arr={arr} onDeleteClick={onDeleteClick} />
      )}
      <button onClick={() => onHandleClick(item)}>Add one</button>
    </ul>
  );
}

export default List;

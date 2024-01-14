import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditPage = () => {
  const [inputValue, setInputValue] = useState({
    todosName: "",
    todosDesc: "",
  });
  const { id } = useParams();

  const onHandleChangeName = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, todosName: value });
  };
  const onHandleChangeDesc = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, todosDesc: value });
  };

  const changeTodo = async () => {
    if (inputValue.todosName === "" || inputValue.todosDesc === "") {
      alert("inputs can not be empty");
      return;
    }
    const payload = {
      title: inputValue.todosName,
      description: inputValue.todosDesc,
    };
    await axios.patch(`todos/${id}`, payload);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
        <p>Change title:</p>
        <input
          className="edit-inputs"
          onChange={onHandleChangeName}
          value={inputValue.todosName}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <p>Change description:</p>
        <input
          className="edit-inputs"
          onChange={onHandleChangeDesc}
          value={inputValue.todosDesc}
        />
      </div>
      <Link
        className="link-in-not-found"
        to={`/todos/${id}`}
        onClick={changeTodo}
      >
        Change
      </Link>
    </div>
  );
};
export default EditPage;

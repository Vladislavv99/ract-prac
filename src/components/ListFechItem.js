import { useContext } from "react";
import { Context } from "../Context";

const ListFetchItem = ({ id, title, description, checked }) => {
  const { deleteTodo, toggleTodo, completed } = useContext(Context);

  const cls = ["todo"];

  if (checked) {
    cls.push("completed");
  }
  return (
    <li className={cls.join(" ")}>
      <p className="peshka">{title}</p>
      <p className="peshka">{description}</p>
      <input
        disabled={completed}
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={checked}
        name={title}
      />
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ListFetchItem;

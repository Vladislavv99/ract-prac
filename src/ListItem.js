import { useContext } from "react";
import { Context } from "./Context";

function ListItem({ id, name, completed }) {
  const { toggleTodo, deleteItem } = useContext(Context);

  const cls = ["todo"];

  if (completed) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
        name={name}
      />
      {name}
      <button onClick={() => deleteItem(id)}>Delete</button>
    </li>
  );
}
export default ListItem;

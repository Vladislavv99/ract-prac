import { useState } from "react";

function ListItem(props) {
  const [check, setCheck] = useState([{ name: "", checked: false }]);

  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheck(!check);
    } else {
      setCheck(!check);
    }
  };

  return props.arr.map((item) => (
    <li key={item.id}>
      <input type="checkbox" onChange={handleChecked} name={item.name} />
      {item.name}
      <button onClick={() => props.onDeleteClick(item.id)}>Delete</button>
    </li>
  ));
}
export default ListItem;

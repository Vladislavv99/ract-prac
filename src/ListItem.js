function ListItem(props) {
  return props.arr.map((item) => (
    <li key={item.id}>
      {item.name}{" "}
      <button onClick={() => props.onDeleteClick(item.id)}>Delete</button>
    </li>
  ));
}
export default ListItem;

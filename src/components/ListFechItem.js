const ListFetchItem = ({ id, title, description, checked }) => {
  return (
    <li className="li-item">
      <p className="peshka">{title}</p>
      <p className="peshka">Description: {description}</p>
      <input type="checkbox" checked={checked} name={title} />
      <button>Delete</button>
    </li>
  );
};

export default ListFetchItem;

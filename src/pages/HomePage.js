import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Walcome to your todo list</h1>
      <Link className="link-in-not-found" to="/todos">
        Go to todo list
      </Link>
    </div>
  );
};

export default HomePage;

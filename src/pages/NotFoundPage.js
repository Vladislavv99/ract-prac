import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>This page not found</h1>
      <Link className="link-in-not-found" to="/todos">
        Go to todo list
      </Link>
    </div>
  );
};

export default NotFoundPage;

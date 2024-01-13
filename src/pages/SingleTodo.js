import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getSingleTodo } from "../api/api";
import { formatDate } from "../helpers/FormatData";

const SingleTodo = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["singleTodo"],
    queryFn: () => getSingleTodo(id),
  });

  console.log(data);
  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <div>
      <p>
        <span className="info-single-todo"> Todo's title: </span>
        {data.title}
      </p>
      <p>
        <span className="info-single-todo">Todo's description: </span>
        {data.description}
      </p>
      <p>
        <span className="info-single-todo">Todo's creation date: </span>
        {formatDate(data.creationDate)}
      </p>
      <Link className="link-in-not-found" to="/todos">
        Go to todo list
      </Link>
    </div>
  );
};

export default SingleTodo;

import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";
function Completed(props) {
  const completeBtn = async () => {
    let title = props.todo.fields.title;
    let description = props.todo.fields.description;
    let date = props.todo.fields.date;
    let name = props.todo.fields.name;
    let complete = "false";
    const task = {
      title,
      description,
      date,
      complete,
      name,
    };
    const recordURL = `${baseURL}/${props.todo.id}`;
    await axios.put(recordURL, { fields: task }, config);
    props.setToggleFetch((curr) => !curr);
  };
  if (
    props.todo.fields.complete === "true" &&
    props.name === props.todo.fields.name
  ) {
    return (
      <div className="card">
        <Link to={`/todo/${props.todo.id}`}>
          <p>{props.todo.fields.title}</p>
        </Link>
        <button type="submit" onClick={completeBtn}>
          undo
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Completed;

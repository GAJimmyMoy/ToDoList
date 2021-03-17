import axios from 'axios';
import { baseURL, config } from "../services";
import { Link } from 'react-router-dom';
function Completed(props) {

  const completeBtn = async () => {
    let title = props.todo.fields.title;
    let description = props.todo.fields.description;
    let date = props.todo.fields.date;
    let complete = "false";
    const task = {
      title,
      description,
      date,
      complete
    }
    const recordURL = `${baseURL}/${props.todo.id}`;
    await axios.put(recordURL,{fields:task} ,config)
    // props.setToggleFetch((curr) => !curr);
  }
  if (props.todo.fields.complete == "false") {
    return null
  } else {
    return (
      <div className="card">
      <Link to="/todo/:id"><p>{ props.todo.fields.title}</p></Link> 
     <button type="submit"  onClick={completeBtn}>undo</button>
        </div>
  )
}

  
  
}

export default Completed;
import axios from 'axios';
import { baseURL, config } from "../services";
import { Link } from 'react-router-dom';
function ToDoItem(props) {
// console.log(props.todo.fields.name)
// console.log(props.todo.fields)
  const completeBtn = async () => {
    let title = props.todo.fields.title;
    let description = props.todo.fields.description;
    let date = props.todo.fields.date;
    let complete = "true";

    const newSitcom = {
      title,
      description,
      date,
      complete
    }
    const recordURL = `${baseURL}/${props.todo.id}`;
    await axios.put(recordURL,{fields:newSitcom} ,config)
    // props.setToggleFetch((curr) => !curr);
  }
  if (props.todo.fields.complete == "true" ) {
    return null
  } else if((props.todo.fields.complete == "false")&&(props.name==props.todo.fields.name)){
    return (
       <div className="card">
        <Link to={`/todo/${props.todo.id}`}><p>{props.todo.fields.title}</p></Link>
       
     <button type="submit"  onClick={()=>completeBtn()}>Complete</button>
        </div>
  )
}else{ return null}

  
  
}

export default ToDoItem;
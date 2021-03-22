import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseURL, config } from "../services";
import axios from 'axios';
function ToDoDetails(props) {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(1);
  const [id, setId] = useState("");
  let history = useHistory();
  useEffect(() => {
    if (params.id && props.todo.length > 0) {
      const site = props.todo.find((todo) => todo.id === params.id);
      setTitle(site.fields.title);
      setDescription(site.fields.description);
      setDate(site.fields.date);
      setId(site.id);
      
    }
    
  }, [props.todo, params.id]);

  const deleteBtn =async() => {
    const todoURL = `${baseURL}/${id}`;
    history.push("/todo")
    await axios.delete(todoURL, config);
    props.setToggleFetch((curr) => !curr);
    
  }
  return (
    <div className="toDoDetailsCard"> 
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={deleteBtn}>delete Me</button>
    </div>
    
  )
}
export default ToDoDetails;
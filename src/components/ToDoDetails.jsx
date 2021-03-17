import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ToDoDetails(props) {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(1);

  useEffect(() => {
    if (params.id && props.todo.length > 0) {
const site = props.todo.find((todo) => todo.id === params.id);
        setTitle(site.fields.title);
        setDescription(site.fields.description);
        setDate(site.fields.date);
    
}

},[props.todo, params.id])
  return (
    <div > 
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{ date}</h2>
    </div>
    
  )
}
export default ToDoDetails;
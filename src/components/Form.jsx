import { useState } from 'react';
import axios from 'axios';
import { baseURL, config } from "../services";
import { useHistory } from 'react-router-dom';
function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const complete = "false";
  const name = props.name;
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    const newTask = {
      name,
      title,
      description,
       date,
      complete
    }
    await axios.post(baseURL, { fields: newTask }, config);
    props.setToggleFetch((curr) => !curr);
    history.push('/todo')
  }


  return (
    <form onSubmit={handleSubmit} className="form-container">
      
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" placeholder="title" value={title} onChange={ (e)=>{setTitle(e.target.value)}} required/>
      
      <label htmlFor="description">Description: </label>
        <textarea id="description" type="text" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)} } required/>
      
        <label htmlFor="date">Date: </label>
      <input id="date" type="date" placeholder="date" value={date} onChange={(e)=>{setDate(e.target.value)} }/>
      
        <button className="btn" type="submit">Submit</button>
    </form>
  );
}

export default Form;

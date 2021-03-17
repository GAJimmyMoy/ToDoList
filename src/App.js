import NavBar from "./components/NavBar";
import "./App.css";
import { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import {  Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import ToDoDetails from './components/ToDoDetails';
import Form from './components/Form';
import Completed from './components/Completed';
import Login from './components/Login'
function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [name,setName] = useState("");
  useEffect(() => {
    const getToDoItems = async () => {
      const response = await axios.get(baseURL, config);
      
     
      setToDoItems(response.data.records);
     
      
    };
    getToDoItems();
  }, [[toggleFetch]]);
  const sendDataToParent=(val)=>{
  setName(val)
}
  return (
    <div className="App">
      <h1>{name} To Do List</h1>
      <NavBar />
      <Route exact path="/">
        <div className="card-container">
          {toDoItems.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} name={name } setToggleFetch={setToggleFetch}/>
          ))}
        </div>
      </Route>

      <Route path="/todo/:id">
        <ToDoDetails todo={toDoItems} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/form">
          <Form/>
      </Route>
      <Route path="/completed">
        <div className="card-container">
          {toDoItems.map((todo) => (
            <Completed key={todo.id} todo={todo} setToggleFetch={setToggleFetch}/>
          ))}
        </div>
      </Route>

      <Route path="/login">
        <Login sendDataToParent={sendDataToParent} />
      </Route>
    </div>
  );
}

export default App;

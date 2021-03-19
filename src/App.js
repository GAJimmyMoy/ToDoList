import NavBar from "./components/NavBar";
import "./App.css";
import { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import ToDoDetails from "./components/ToDoDetails";
import Form from "./components/Form";
import Completed from "./components/Completed";
import Login from "./components/Login";
import Footer from './components/Footer';
import Notes from './components/Notes';
function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const getToDoItems = async () => {
      const response = await axios.get(baseURL, config);

      setToDoItems(response.data.records);
    };
    getToDoItems();
  }, [toggleFetch]);

  const sendDataToParent = (val) => {
    setName(val);
  };
  return (
    <div className="App">
      <section className="title-section">
        <h3>{name} To Do List</h3>
      </section>

      <section className="navbar-section">
        <NavBar name={name} setName={setName } loggedIn={loggedIn} setLoggedIn={ setLoggedIn}/>
      </section>

      <section className="content-section">
        <div>
        <Route exact path="/">
            <Login
              sendDataToParent={sendDataToParent}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setToggleFetch={setToggleFetch}
            />
        </Route>

        <Route exact path="/todo">
          <div className="card-container">
            {toDoItems.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                name={name}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </div>
        </Route>

        <Route path="/todo/:id">
          <ToDoDetails todo={toDoItems} setToggleFetch={setToggleFetch} />
        </Route>

        <Route path="/form">
          <Form name={name} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/completed">
          <div className="card-container">
            {toDoItems.map((todo) => (
              <Completed
                key={todo.id}
                name={name}
                todo={todo}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </div>
        </Route>
        <Route path="/notes">
          <Notes/>
          </Route>
        </div>
        
        
      </section>
      <div>
        <Footer/>
        </div>
    </div>
    
  );
}

export default App;

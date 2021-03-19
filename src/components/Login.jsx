import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Login(props) {
  const [name, setName] = useState("");
  const { loggedIn, setLoggedIn, sendDataToParent,setToggleFetch } = props;
  let history = useHistory();



  function handleSubmit(e) {
    e.preventDefault();
    
    if (name != "") {
      sendDataToParent(name);
      setLoggedIn(true)
      // console.log(loggedin)
      history.push("/todo")
      setToggleFetch((curr) => !curr);
      
    } else {
      alert("you must enter name first")
    }
  }
  
    if (!loggedIn) {
      return (
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
        
            
            <button type="submit" className="btn">submit</button>
          </form>
        
        </div>
      )
  
    }
    
    else {
      return null;
    }
  
}
export default Login;
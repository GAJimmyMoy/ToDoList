import { useState } from 'react';

function Login({sendDataToParent}) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    sendDataToParent(name);
  }
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      
        <p></p>
        <button className="btn">submit</button>
      </form>
      
    </div>
  )
}
export default Login;
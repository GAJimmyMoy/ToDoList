import { Link } from 'react-router-dom';

export default function NavBar(props) {
  const { loggedIn, setLoggedIn, setName } = props;

  const handleLogOut = () => {
    // let resp = window.confirm("are you sure you want to log out?");
    // if (resp == true) {
if (true) {
      setName("");
      setLoggedIn(false);
    }
  }
//   if (!loggedIn) {
//   return <>loading</>
// }//guard 
  return (
    <nav>
      <ul>
        {loggedIn ? 
          <Link to="/" onClick={handleLogOut}>Log Out</Link> :
          <Link to="/"  >Log In</Link>
          
          // onClick={() => setLoggedIn(true)}
        }
        <Link to="/todo">To Do's</Link>
        <Link to="/form">Form</Link>
        <Link to="/completed">Completed</Link>
      </ul>
    </nav>
  )
}
import { Link } from 'react-router-dom';
function NavBar(props) {
  
  return (
    <nav>
      <ul>
      <Link to="/">Login</Link>
        <Link to="/todo">To Do's</Link>

        <Link to="/form">Form</Link>
        
        <Link to="/completed">Completed</Link>

        {/* <Link to="/notes">Notes</Link> */}
      </ul>
   </nav>
  )
}
export default NavBar;
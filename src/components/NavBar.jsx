import { Link } from 'react-router-dom';
function NavBar(props) {
  
  return (
    <nav>
      <ul className="navbar">
      <Link to="/login">Login</Link>
        <Link to="/">To Do's</Link>

        <Link to="/form">Form</Link>
        
        <Link to="/completed">Completed</Link>

        
      </ul>
   </nav>
  )
}
export default NavBar;
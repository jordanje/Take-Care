import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import './Navbar.css'
import logo from '../ta==.png';

export default function Navbar({ currentUser, updateUser, setMeditations }) {

    const navigate = useNavigate();

    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => {
        updateUser(false)
        navigate('/')
      });
    }

    function handleLogin() {
      
    }
  
    return (
      <div className="navbar">
        <img className='logo' src={logo} />
        {currentUser? 
        <div className="logged-out">
          <p>Hi, {`${currentUser.firstname}`}!</p>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
        :
        <div className="logged-in">
          <Login updateUser={updateUser} setMeditations={setMeditations}/>
          <Signup />
          {/* <Signup /> */}
        </div>
        }
      </div>
      
    );
  }
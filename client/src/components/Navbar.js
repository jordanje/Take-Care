import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import './Navbar.css'
import logo from '../TakeCareLogo.png';

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

    function handleLogoClick(){
      currentUser ? navigate('./userpage') : navigate('./')
    }
  
    return (
      <div className="navbar">
        <img className='logo' src={logo} onClick={handleLogoClick}/>
        {currentUser? 
        <div className="logged-out">
          {/* <button className="intentions-btn">INTENTIONS</button>
          <button className="meditate-btn">MEDITATE</button> */}
          <p>Hi, {currentUser.firstname}!</p>
          <button className="logout" onClick={handleLogout}>logout</button>
    
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
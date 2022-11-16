import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import './Navbar.css'
import logo from '../TakeCareLogo.svg';

export default function Navbar({ currentUser, updateUser, setMeditations }) {

    const navigate = useNavigate();

    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => {
        updateUser(false)
        setMeditations([])
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
          <div className="logout" onClick={handleLogout}>Log out</div>
    
        </div>
        :
        <p  className='slogan' >A Mindfulness App for Meditation and Intentions</p>
        }
      </div>
      
    );
  }
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

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
      <div>
        {currentUser? 
        <div className="logged-out">
          <p>Hi, {`${currentUser.firstname}`}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
        :
        <div className="logged-in">
          <Login updateUser={updateUser} setMeditations={setMeditations}/>
          {/* <Signup /> */}
        </div>
        }
      </div>
      
    );
  }
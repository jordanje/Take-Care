import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import './Home.css';


export default function Home({updateUser, setMeditations}) {
    const [showLogin, setShowLogin] = useState(true)
    const [showSignup, setShowSignup ] = useState(false)

    const handleShowSignup = () => {
        setShowLogin(false)
        setShowSignup(true)
    }

    const handleShowLogin = () => {
        setShowSignup(false)
        setShowLogin(true)
    }
   
    return (
        <div className="home-page">
            <div className="login-signup-div">
                {showLogin&& 
                <Login 
                handleShowSignup={handleShowSignup} 
                updateUser={updateUser} 
                setMeditations={setMeditations}
                />}
                {showSignup&& <Signup handleShowLogin={handleShowLogin}/> }
            </div>
            <div className="background-circles" >

            </div>
        </div>
    )
}
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserPage from './components/UserPage';
import ThemePage from "./components/ThemePage";
import MeditationPage from "./components/MeditationPage";
import MeditationReflection from "./components/MeditationReflection";

function App() {
  const [currentUser, setCurrentUser] = useState(false)


  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })
  }, []);

  const updateUser = (user) => setCurrentUser(user)


  return (
    <div>
      <Navbar updateUser={updateUser} currentUser={currentUser}/>
        <Routes>
            <Route path="/" element={<Home updateUser={updateUser} />} />
            {/* <Route path="/login" element={<Login updateUser={updateUser}/>} /> */}
            <Route path="/userpage" element={<UserPage currentUser={currentUser}/>} />
            <Route path="/themes" element={<ThemePage currentUser={currentUser}/>} />
            <Route path="/meditation" element={<MeditationPage currentUser={currentUser}/>} />
            <Route path="/meditation-reflection" element={<MeditationReflection currentUser={currentUser}/>} />
        </Routes>
    </div>
  )


}

export default App;

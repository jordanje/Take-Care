import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserPage from './components/UserPage';
import ThemePage from "./components/ThemePage";
import MeditationPage from "./components/MeditationPage";
import MeditationReflection from "./components/MeditationReflection";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [ themes, setThemes ] = useState([]);
  const [ selectedTheme, setSelectedTheme ] = useState(false);
  const navigate = useNavigate();
  const [ meditations, setMeditations ] = useState([])

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })

    fetch('/themes')
      .then(res => {
          if(res.ok){
              res.json().then(data => {
                  setThemes(data)
              })
          }
      })

      fetch('/meditations')
      .then(data => data.json())
      .then(data => {
          setMeditations(data)
      })
  
  }, []);

  const updateUser = (user) => setCurrentUser(user)
  const updateTheme = (theme) => {
    setSelectedTheme(theme)
    navigate('/meditation')
  }
  const updateMeditations = (newMeditation) => setMeditations([...meditations, newMeditation])


  return (
    <div>
      <Navbar updateUser={updateUser} currentUser={currentUser}/>
        <Routes>
            <Route path="/" element={<Home updateUser={updateUser} />} />
            {/* <Route path="/login" element={<Login updateUser={updateUser}/>} /> */}
            <Route path="/userpage" element={<UserPage currentUser={currentUser} meditations={meditations}/>} />
            <Route path="/themes" element={<ThemePage currentUser={currentUser} themes={themes} updateTheme={updateTheme}/>} />
            <Route path="/meditation" element={<MeditationPage currentUser={currentUser} selectedTheme={selectedTheme} updateMeditations={updateMeditations}/>} />
            <Route path="/meditation-reflection" element={<MeditationReflection currentUser={currentUser} />} />
        </Routes>
    </div>
  )


}

export default App;

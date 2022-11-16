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
import Intentions from "./components/Intentions";
import MeditationItemPage from "./components/MeditationItemPage";
import NightSky from './NightSky.mp3'
import FirePlace from './Fireplace.mp3'
import OceanWaves from './OceanWaves.mp3'
import Stream from './Stream.mp3'
import Thunderstorm from './Thunderstorm.mp3'
import Rainforest from './Rainforest.mp3'
import loginPhoto from './loginphoto.svg'

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [ themes, setThemes ] = useState([
    {id: 1, name: 'Night Sky', background: 'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', audio: NightSky}, 
    {id: 2, name: "Ocean Waves", background: 'https://images.pexels.com/photos/355328/pexels-photo-355328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', audio: OceanWaves}, 
    {id: 3, name: 'Rainforest', background: 'https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', audio:Rainforest}, 
    {id: 4, name: 'Fireplace', background: 'https://images.pexels.com/photos/1724228/pexels-photo-1724228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', audio: FirePlace}, 
    {id: 5, name: 'Relaxing Stream', background: 'https://images.pexels.com/photos/1578749/pexels-photo-1578749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', audio: Stream},
    {id: 6, name: 'Thunderstorm', background: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', audio: Thunderstorm}
  ]);
  const [ selectedTheme, setSelectedTheme ] = useState(false);
  const navigate = useNavigate();
  const [ meditations, setMeditations ] = useState([])
  const [ duration, setDuration] = useState(0)


  const updateUser = (user) => setCurrentUser(user)
  const updateTheme = (theme) => {
    setSelectedTheme(theme)
    navigate('/meditation')
  }
  const updateMeditations = (newMeditation) => setMeditations([newMeditation,...meditations])
  const updateDuration = (newTime) => setDuration(parseInt(newTime) + parseInt(duration))

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)

          const totalMinutes = `${Math.floor(user.total_time_this_week / 60)}`
          const getTotalMinutes = `${totalMinutes % 60}`.slice(-2)
          setDuration(totalMinutes)
        })
      }
    })

    // fetch('/themes')
    //   .then(res => {
    //       if(res.ok){
    //           res.json().then(data => {
    //               setThemes(data)
    //           })
    //       }
    //   })

      fetch('/meditations')
      .then(data => data.json())
      .then(data => {
          setMeditations(data)
      })
  
  }, [setMeditations]);


  return (
    <div>
      <Navbar updateUser={updateUser} currentUser={currentUser}/>
        <Routes>
            <Route path="/" element={<Home updateUser={updateUser} />} />
            {/* <Route path="/login" element={<Login updateUser={updateUser}/>} /> */}
            <Route path="/userpage" element={<UserPage duration={duration} currentUser={currentUser} meditations={meditations}/>} />
            <Route path="/daily-intention" element={<Intentions currentUser={currentUser}/>}/>
            <Route path="/themes" element={<ThemePage currentUser={currentUser} themes={themes} updateTheme={updateTheme}/>} />
            <Route path="/meditation" element={<MeditationPage updateDuration={updateDuration} duration={duration} currentUser={currentUser} selectedTheme={selectedTheme} updateMeditations={updateMeditations}/>} />
            <Route path='/meditation/:id' element={<MeditationItemPage />} />
            <Route path='/login-photo' element={loginPhoto} />
        </Routes>
    </div>
  )


}

export default App;

import { useState, useEffect } from "react";
import StopWatch from "./StopWatch/StopWatch";
import MeditationReflection from "./MeditationReflection"
import "./MeditationPage.css"
import AudioController from "./AudioController";

export default function MeditationPage({currentUser, selectedTheme, updateDuration, updateMeditations}){
    const [ meditationEnd, setMeditationEnd ] = useState(false)
    const [ newMeditation, setNewMeditation ] = useState({})

    // timer states -->
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    //audio state -->
    const [playing, setPlaying] = useState(false)
 

    useEffect(() => {
        let interval = null;
      
        if (isActive && isPaused === false) {
          interval = setInterval(() => {
            setTime((time) => time + 1);
          }, 1000);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [isActive, isPaused]);



      const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        setPlaying(true)
      };
      
      const handlePauseResume = () => {
        setIsPaused(!isPaused);
        setPlaying(!playing)
      };
      
      const handleReset = () => {
        setIsActive(false);
        setTime(0);
      };

      const handleEnd = () => {

        const meditation_data = {
            user_id: currentUser.id,
            length: time,
            meditation_reflection_id: null,
            theme_name: selectedTheme.name
        }
        setIsActive(false);
        setTime(0);
        setPlaying(false)

        fetch('/meditations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meditation_data)
        }).then((res) => res.json())
        .then((data) => {
          console.log(data)
          onShowReflection(data)
          updateMeditations(data)

        const totalMinutes = `${Math.floor(data.length / 60)}`
        const getTotalMinutes = `${totalMinutes % 60}`.slice(-2)
          updateDuration(getTotalMinutes)
        })
      }


    const onShowReflection = (meditation) => {
        setMeditationEnd(true)
        setNewMeditation(meditation)
    }


    return (
        <div >
        { meditationEnd?
            <MeditationReflection currentUser={currentUser} newMeditation={newMeditation} />
            :
            <div className="meditation-page">
                 {/* <h2>{selectedTheme.name}</h2> */}
                <div className="meditation-background">
                    <img src={selectedTheme.background} alt={selectedTheme.name}/>
                </div>
                <div className="audio">
                    {selectedTheme.audio&&<AudioController audio={selectedTheme.audio} playing={playing}/>}
                </div>
                <div className="stop-watch-div">
                    <StopWatch wait={3000} currentUser={currentUser} isActive={isActive} isPaused={isPaused} time={time} handleEnd={handleEnd} handlePauseResume={handlePauseResume} handleReset={handleReset} handleStart={handleStart}/>     
                </div>
            </div>
        }
        </div>
    )
}
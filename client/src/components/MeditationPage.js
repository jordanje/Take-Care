import { useState, useEffect } from "react";
import StopWatch from "./StopWatch/StopWatch";
import MeditationReflection from "./MeditationReflection"
import "./MeditationPage.css"
import AudioController from "./AudioController";

export default function MeditationPage({currentUser, selectedTheme, updateDuration, updateMeditations}){
    const [ meditationEnd, setMeditationEnd ] = useState(false)
    const [ newMeditation, setNewMeditation ] = useState({})
    const [ hideCircles, setHideCircles ] = useState(true)
    const [ showPhoto, setShowPhoto ] = useState(false)

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
        // setPlaying(true)
        setHideCircles(false)
        const timer = setTimeout(() => {
          setPlaying(true)
          
        }, 20000)

        const timer2 = setTimeout(() => {
          setHideCircles(true)
          setShowPhoto(true)
          
        }, 20000)
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

    useEffect(() => {
  

    }, [])

    const background = selectedTheme.background


    return (
        <div >
        { meditationEnd?
            <MeditationReflection currentUser={currentUser} newMeditation={newMeditation} />
            :
            <div className="meditation-page">
              <img  className={showPhoto?"background-image":'background-image-hidden'} src={background} />
                 {/* <h2>{selectedTheme.name}</h2> */}
             
                <div className="meditation-background">
                <div className={hideCircles? "container-hidden":"container"} >
                <div className="circle" >
                </div>
                </div>
                </div>
                {/* <div className="circle1">
                </div>
                <div className="circle2">
                </div>
                <div className="circle3">
                </div> */}
                {/* <div className="circle" style={{animationDelay: '1s'}}>
                </div>
                <div className="circle" style={{animationDelay: '1s'}}>
                </div> */}
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
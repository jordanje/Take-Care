import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StopWatch({currentUser}){
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    let navigate = useNavigate();

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
      };
      
      const handlePauseResume = () => {
        setIsPaused(!isPaused);
      };
      
      const handleReset = () => {
        setIsActive(false);
        setTime(0);
      };

      const handleEnd = () => {

        const meditation_data = {
            user_id: currentUser.id,
            length: time
        }
        setIsActive(false);
        setTime(0);

        console.log(meditation_data)
        fetch('/meditations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(meditation_data)
        }).then(res => res.json())
        .then(data => console.log(data))
      }

    return (
        <div>
            <Timer time={time}/>
            <ControlButtons 
                   active={isActive}
                   isPaused={isPaused}
                   handleStart={handleStart}
                   handlePauseResume={handlePauseResume}
                   handleReset={handleReset}
                   handleEnd={handleEnd}
            />
        </div>
    )
}
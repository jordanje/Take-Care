import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import { useState, useEffect } from "react";
import './StopWatch.css'

export default function StopWatch({isActive, time, isPaused, handleEnd, handlePauseResume, handleReset, handleStart}){
  

    return (
        <div className="stop-watch-container">
          <div className="timer">
            <Timer time={time}/>
          </div>
          <div className="control-btns">
            <ControlButtons 
                   active={isActive}
                   isPaused={isPaused}
                   handleStart={handleStart}
                   handlePauseResume={handlePauseResume}
                   handleReset={handleReset}
                   handleEnd={handleEnd}
            />
          </div>
        </div>
    )
}
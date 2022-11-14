import './StopWatch.css'


export default function ControlButtons(props){
    const StartButton = (
        <div className="btn-start"
             onClick={props.handleStart}>
          Begin
        </div>
      );
      const ActiveButtons = (
        <div className="btn-grp-2">
          <div className="btn-two" 
               onClick={props.handleReset}>
            Reset
          </div>
          <div className="btn-two" 
               onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
          </div>
          <div className="btn-two" onClick={props.handleEnd}>
            Finish
          </div>
        </div>
      );
      
      return (
        <div className="Control-Buttons">
          <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
      );
}
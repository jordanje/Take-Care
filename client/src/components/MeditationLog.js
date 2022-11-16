import { useEffect, useState } from "react"
import ReflectionLog from "./ReflectionLog";
import UserPage from "./UserPage";
import './MeditationLog.css'
import MeditationButton from "./MeditationButton";
import { useNavigate } from "react-router-dom";

export default function MeditationLog({currentUser, meditations, duration}) {
    // const [ viewReflection, setViewReflection ] = useState(false)
    // const handleViewReflection = () => setViewReflection(true)
    let navigate = useNavigate();

    const handleMeditationClick = (id) => {
        navigate(`/meditation/${id}`)
    }




        const totalLastMinutes = `${Math.floor(currentUser.total_time_last_week / 60)}`
        const getTotalLastMinutes = `${totalLastMinutes % 60}`.slice(-2)

        // const longestMinutes = `${Math.floor(currentUser.longest.length / 60)}`
        // const getLongestMinutes = `${longestMinutes % 60}`.slice(-2)
    
  
        return (
            <div className="meditation-log">
                <div className="stats">
                  
                    <div className="this-week">
                        <span>{duration} min</span>
                        <p>Total time this week</p>
                    </div>
                    {/* <div className="longest">
                        <span>{longestMinutes} min</span>
                        <p>Longest meditation</p>
                    </div> */}
            
                </div>
          
                <h3>Recent Activity</h3>
                <div className="meditation-logs">
                {meditations.map((med, index) => {
                  
                    const getSeconds = `0${(med.length % 60)}`.slice(-2)
                    const minutes = `${Math.floor(med.length / 60)}`
                    const getMinutes = `0${minutes % 60}`.slice(-2)
                    const getHours = `0${Math.floor(med.length / 3600)}`.slice(-2)
                  
                    return (
                <div className="meditation-items" key={med.id} onClick={() => handleMeditationClick(med.id)}>
                    <p className='med-date'>{med.created_at}</p>
                    {/* <p>Duration: {getHours}:{getMinutes}:{getSeconds}</p> */}
                    <p className="view-more">›</p>
                  
                    {/* <ReflectionLog key={med.id} id={med.meditation_reflection.id}/>   */}
                </div>
                )}
                )}
                </div>
            </div>
        )
                
} 


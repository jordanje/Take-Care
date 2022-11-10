import { useEffect, useState } from "react"
import ReflectionLog from "./ReflectionLog";
import UserPage from "./UserPage";
import './MeditationLog.css'
import MeditationButton from "./MeditationButton";

export default function MeditationLog({currentUser, meditations}) {
    // const [ viewReflection, setViewReflection ] = useState(false)
    // const handleViewReflection = () => setViewReflection(true)


    if(currentUser){
        const totalMinutes = `${Math.floor(currentUser.total_time_this_week / 60)}`
        const getTotalMinutes = `${totalMinutes % 60}`.slice(-2)


        const totalLastMinutes = `${Math.floor(currentUser.total_time_last_week / 60)}`
        const getTotalLastMinutes = `${totalLastMinutes % 60}`.slice(-2)

        const longestMinutes = `${Math.floor(currentUser.longest.length / 60)}`
        const getLongestMinutes = `${longestMinutes % 60}`.slice(-2)
    
  
        return (
            <div className="meditation-log">
                <div className="stats">
                  
                    <div className="this-week">
                        <span>{getTotalMinutes} min</span>
                        <p>Total time this week</p>
                    </div>
                    <div className="last-week">
                        <span>{totalLastMinutes} min</span>
                        <p>Total time last week</p>
                    </div>
                    <div className="longest-meditation">
                        <span>{longestMinutes} min</span>
                        <p>Longest meditation</p>
                    </div>
                </div>
                <div className="meditation-btn-container">
                    <MeditationButton />
                </div>
                <h3>Recent Activity</h3>
                {meditations.slice(0,5).map((med, index) => {
                  
                    const getSeconds = `0${(med.length % 60)}`.slice(-2)
                    const minutes = `${Math.floor(med.length / 60)}`
                    const getMinutes = `0${minutes % 60}`.slice(-2)
                    const getHours = `0${Math.floor(med.length / 3600)}`.slice(-2)
                  
                    return (
                <div key={med.id}>
                    <img />
                    <p>{med.created_at}</p>
                    <p>Duration: {getHours}:{getMinutes}:{getSeconds}</p>
                  
                    {/* <ReflectionLog key={med.id} id={med.meditation_reflection.id}/>   */}
                </div>
                )}
                )}
            </div>
        )
                }
} 


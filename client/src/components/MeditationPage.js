import { useState } from "react";
import StopWatch from "./StopWatch/StopWatch";
import MeditationReflection from "./MeditationReflection"
import "./MeditationPage.css"

export default function MeditationPage({currentUser, selectedTheme, updateMeditations}){
    const [ meditationEnd, setMeditationEnd ] = useState(false)
    const [ newMeditation, setNewMeditation ] = useState({})


    const onShowReflection = (meditation) => {
        setMeditationEnd(true)
        setNewMeditation(meditation)
    }

    console.log(selectedTheme)

    return (
        <div >
        { meditationEnd?
            <MeditationReflection currentUser={currentUser} newMeditation={newMeditation} />
            :
            <div className="meditation-page" style={{ backgroundImage : `url(${selectedTheme.background})`, backgroundSize: '100%'}} >
                <p>Theme: {selectedTheme.name}</p>
                <StopWatch currentUser={currentUser} onShowReflection={onShowReflection} selectedTheme={selectedTheme} updateMeditations={updateMeditations}/> 
            </div>
        }
        </div>
    )
}
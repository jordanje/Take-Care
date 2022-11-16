import DailyTip from "./DailyTip";
import Intentions from "./Intentions";
import MeditationButton from "./MeditationButton";
import MeditationLog from "./MeditationLog";
import './Userpage.css'
import { useState } from "react";
import PageToggler from "./PageToggler";

export default function UserPage ({currentUser, meditations, duration}) {
    const [switchPage, setSwitchPage] = useState(false);
    
    
 
    return (
        <div>
            {switchPage? 
            <div className="intentions-page">
                  <div className="background-intentions">
                </div>
                <Intentions />
            </div>: 
            <div className="user-page">
            <div className="greeting">
                
            </div>
            <div className="daily-tip-div">
                <DailyTip />
            </div>
            <div className="meditation-btn-container">
                <MeditationButton />
            </div>
            <div className="meditation-section">
                <MeditationLog duration={duration} currentUser={currentUser} meditations={meditations}/>
            </div>
          
            </div>
            }
              <div>
                <PageToggler setSwitchPage={setSwitchPage}/>
            </div>
        </div>  
    )
   
}
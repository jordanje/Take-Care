import Intentions from "./Intentions";
import MeditationButton from "./MeditationButton";
import MeditationLog from "./MeditationLog";
import './Userpage.css'

export default function UserPage ({currentUser, meditations}) {

    
    return (
        <div className="user-page">
            <Intentions currentUser={currentUser}/>
            <div className="meditation-section">
            <MeditationLog currentUser={currentUser} meditations={meditations}/>
            </div>
        </div>
    )
}
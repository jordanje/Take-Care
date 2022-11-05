import Intentions from "./Intentions";
import MeditationButton from "./MeditationButton";
import MeditationLog from "./MeditationLog";
import StopWatch from "./StopWatch/StopWatch";

export default function UserPage ({currentUser}) {

    
    return (
        <div>
            <Intentions currentUser={currentUser}/>
            <MeditationButton />
            <MeditationLog currentUser={currentUser}/>
        </div>
    )
}
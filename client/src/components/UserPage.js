import Intentions from "./Intentions";
import MeditationButton from "./MeditationButton";

export default function UserPage ({currentUser}) {
    return (
        <div>
            <Intentions currentUser={currentUser}/>
            <MeditationButton />
        </div>
    )
}
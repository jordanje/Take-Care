import { useEffect, useState } from "react"
import UserPage from "./UserPage";

export default function MeditationLog({currentUser}) {
    // const [ meditations, setMeditations ] = useState();

    // const log = currentUser.map((med) => med)

    if (currentUser) {
        const meditations = currentUser.meditations.map((med) => med )
        return (
            <div>
                <h3>Meditation Log</h3>
                {meditations.map((med) => (
                <div>
                    <p>{med.created_at.slice(0,10)}</p>
                    <p>{med.length}</p>
                </div>
                )
                )}
            </div>
        )
    } 

}
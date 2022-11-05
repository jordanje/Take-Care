import { useNavigate } from "react-router-dom"

export default function MeditationButton(){
    let navigate = useNavigate();

    function handleMeditationClick(){
        navigate('/meditation')
    }

    return (
        <div>
            <button onClick={handleMeditationClick}>Meditate Now</button>
        </div>
    )
}
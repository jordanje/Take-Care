import { useNavigate } from "react-router-dom"
import './MeditationButton.css'

export default function MeditationButton(){
    let navigate = useNavigate();

    function handleMeditationClick(){
        navigate('/themes')
    }

    return (
        <div>
            <button className="meditate-now" onClick={handleMeditationClick}>Meditate Now</button>
        </div>
    )
}
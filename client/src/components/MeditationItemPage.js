import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './MeditationItemPage.css'
import circles from '../circles.png'
import clock from '../clock.png'


export default function MeditationItemPage(){
    const [meditation, setMeditation] = useState([])
    const [meditationReflection, setMeditationReflection ] = useState([])
    const [ questions, setQuestions ] = useState(
        {question1: "Blah blah blah blah fdsfsdfdf dsfsdf?", 
        question2: "Howl bsdflah blafdg blah fdsfsdfdf dsfsdf?",
        question3: "Didlsdf blah fdsfblah blah fdsfsdfdf dsfsdf?",
        question4: "Cankh blah bloih blasdfh frtuf sdfdf dsfsdf?"})
    const {id} = useParams()

    const totalMinutes = `${Math.floor(meditation.length / 60)}`
    const getTotalMinutes = `${totalMinutes % 60}`.slice(-2)

    useEffect(() => {
        fetch(`/meditations/${id}`)
        .then(res => res.json())
        .then(data => {
            setMeditation(data)
            setMeditationReflection(data.meditation_reflection)
        })
    }, [])
    return (
        <div className="meditation-item-page">
           
            <div className="item-header">
            <div className="date">
                    {meditation.created_at} 
                </div>
                <div className="date-duration">
                <img src={circles} className="circle-image"/>
                <div className="duration">
                    <div className="total-minutes"><h3>{totalMinutes}</h3><span>min</span></div>
                    <div className="clock-duration"><img src={clock} alt="clock" className="clock"/><p>Duration</p></div>
                </div>
                </div>
            </div>
            <div className="meditation-reflection-item">
                <p className="questions">{questions.question1}</p>
                <p className="responses">{meditationReflection.question_1}</p>
                <p className="questions">{questions.question2}</p>
                <p className="responses">{meditationReflection.question_2}</p>
                <p className="questions">{questions.question3}</p>
                <p className="responses">{meditationReflection.question_3}</p>
                <p className="questions">{questions.question4}</p>
                <p className="responses">{meditationReflection.question_4}</p>

            </div>
        </div>
    )
}
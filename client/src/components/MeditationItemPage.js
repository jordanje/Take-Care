import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './MeditationItemPage.css'
import circles from '../circles.png'
import clock from '../clock.png'
import goBack from '../goback.svg'



export default function MeditationItemPage(){
    const [meditation, setMeditation] = useState([])
    const [meditationReflection, setMeditationReflection ] = useState([])
    const [ questions, setQuestions ] = useState(
        {question1: "What am I experiencing right now in this very moment?", 
        question2: "What helps me release tension and let go of distracting thoughts?",
        question3: "What am I often aware of during mindfulness meditation?",
        question4: "What thoughts and emotions come to the surface most often?"})
    const {id} = useParams()

    const totalMinutes = `${Math.floor(meditation.length / 60)}`
    const getTotalMinutes = `${totalMinutes % 60}`.slice(-2)

    const navigate = useNavigate();
    

    useEffect(() => {
        fetch(`/meditations/${id}`)
        .then(res => res.json())
        .then(data => {
            setMeditation(data)
           
            if(data.meditation_reflection === null){
                setMeditationReflection({
                    question_1: "",
                    question_2: "",
                    question3: "",
                    question_4: ""
            })
            }else{
                setMeditationReflection(data.meditation_reflection)
            }
        })
    }, [])
    return (
        <div className="meditation-item-page">
           
            <div className="item-header">
                <div className="date">
                    <div className="go-back-div" onClick={() => navigate('/userpage')}>
                        <img src={goBack} alt="go back" />
                    </div>
                    <p>{meditation.created_at} </p>
                </div>
             
                <div className="date-duration">
                <img src={circles} className="circle-image"/>
                <div className="duration">
                    <span className="meditation-type">Meditation</span>
                    <div className="total-minutes"><h3>{totalMinutes}</h3><span>min</span></div>
                    <div className="clock-duration"><img src={clock} alt="clock" className="clock"/><p>Duration</p></div>
                </div>
                </div>
            </div>
            <div className="meditation-reflection-item">
                <p className="questions">{questions.question1}</p>
                <p className="responses">{meditationReflection.question_1 ? meditationReflection.question_1 : null}</p>
                <p className="questions">{questions.question2}</p>
                <p className="responses">{meditationReflection.question_2 ? meditationReflection.question_2 : null}</p>
                <p className="questions">{questions.question3}</p>
                <p className="responses">{meditationReflection.question_3 ? meditationReflection.question_3 : null}</p>
                <p className="questions">{questions.question4}</p>
                <p className="responses">{meditationReflection.question_4 ? meditationReflection.question_4 : null}</p>

            </div>
        </div>
    )
}
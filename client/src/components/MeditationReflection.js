import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './MeditationReflection.css'

export default function MeditationReflection({newMeditation, updateMeditations}) {
    const [ reflectionData, setReflectionData ] = useState({meditation_id: newMeditation.id, question_1:"", question_2:"", question_3:"", question_4:""});

    const navigate = useNavigate()

    console.log(reflectionData)
    function handleSubmit(event) {
        event.preventDefault();

        fetch('/meditation_reflections',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reflectionData)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        navigate('/userpage')
    
    }

    function handleChange(event) {
        setReflectionData({...reflectionData, [event.target.name]: event.target.value });
    }

    return (
        <div className='reflection-form-div'>
                  <div className="background-intentions">
                </div>
            <form className="reflection-form" onSubmit={handleSubmit}>
                <h2>Meditation Reflection</h2>
                <p>A time to reflect on your meditation</p>
                <textarea name="question_1" value={reflectionData.question_1} onChange={handleChange} placeholder="What am I experiencing right now in this very moment?"/>
                <textarea name="question_2"value={reflectionData.question_2} onChange={handleChange} placeholder="What helps me release tension and let go of distracting thoughts?"/>
                <textarea name="question_3" value={reflectionData.question_3} onChange={handleChange} placeholder="What am I often aware of during mindfulness meditation?"/>
                <textarea name="question_4" value={reflectionData.question_4} onChange={handleChange} placeholder="What thoughts and emotions come to the surface most often? "/>
                <input type="submit" value="SAVE"/>
            </form>
        </div>
    )
}
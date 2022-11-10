import { useState } from "react"
import { useNavigate } from "react-router-dom";

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
        <div>
            <form className="reflection-form" onSubmit={handleSubmit}>
                <h2>Daily Intentions</h2>
                <label>Question 1</label>
                <textarea name="question_1" value={reflectionData.question_1} onChange={handleChange}/>
                <label>Question 2</label>
                <textarea name="question_2"value={reflectionData.question_2} onChange={handleChange}/>
                <label>Question 3</label>
                <textarea name="question_3" value={reflectionData.question_3} onChange={handleChange}/>
                <label>Question 4</label>
                <textarea name="question_4" value={reflectionData.question_4} onChange={handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
import { useEffect, useState } from "react"
import "./Intentions.css"

export default function Intentions({currentUser}) {
    const [ intentionData, setIntentionData ] = useState({ question_1: "", question_2: "", question_3: ""})
    const [ intentions, setIntentions ] = useState([])
    const [ intentionLength, setIntentionLength ] = useState(null)
    const [ newForm, setNewForm ] = useState(false)

    useEffect(() => {
        fetch('/intentions')
        .then(res => res.json())
        .then(data => {
            setIntentions(data)
            setIntentionLength(data.length)
        })
    }, [])

    function handleBack(event){
        let index = intentions.length - 1
        let prevIntentions = intentions[index]
        setIntentionData({
            question_1: prevIntentions.question_1,
            question_2: prevIntentions.question_2,
            question_3: prevIntentions.question_3,
        })
        setNewForm(true)

    }

    function handleNewForm(event){
        setIntentionData({ question_1: "", question_2: "", question_3: ""})
    }

    function handleChange(event) {
        setIntentionData({...intentionData, [event.target.name]: event.target.value })
    }

   function handleSubmit(event){

        const intentionsData = {
            user_id: currentUser.id,
            question_1: intentionData.question_1,
            question_2: intentionData.question_2,
            question_3: intentionData.question_3
        }
        event.preventDefault();
        fetch("/intentions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(intentionsData)
        }).then((res) => res.json)
        .then(data => console.log(data))
   } 

    return (
        <div className="intentions">
            <form className="intentions-form" onSubmit={handleSubmit}>
                <h2>Daily Intentions</h2>
                <label>Question 1</label>
                <textarea name="question_1" value={intentionData.question_1} onChange={handleChange}/>
                <label>Question 2</label>
                <textarea name="question_2"value={intentionData.question_2} onChange={handleChange}/>
                <label>Question 3</label>
                <textarea name="question_3" value={intentionData.question_3} onChange={handleChange}/>
                <input type="submit" value="submit"/>
                <button onClick={handleNewForm}>New</button> 
                <button type="button" onClick={handleBack}>Look Back</button> 
                
            </form>
         
            {/* <div>
                {intentions.map((intention) => (
                    <div>
                    <p>{intention.created_at.slice(0,10)}</p>
                    <p>{intention.question_1}</p>
                    <p>{intention.question_2}</p>
                    <p>{intention.question_3}</p>
                    </div>
                ))}
            </div> */}
        </div>
    )
}
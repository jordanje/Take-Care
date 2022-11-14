import { useEffect, useState } from "react"
import "./Intentions.css"
import PageToggler from "./PageToggler"

export default function Intentions({currentUser}) {
    const [ intentionData, setIntentionData ] = useState({ question_1: "", question_2: "", question_3: ""})
    const [ intentions, setIntentions ] = useState([])
    const [ intentionLength, setIntentionLength ] = useState(null)
    const [ lookBack, setLookBack ] = useState(false)
    const [ date, setDate ] = useState("")
    const [ counter, setCounter ] = useState(1)

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
    let today  = new Date();
    let formatedDate = today.toLocaleDateString("en-US", options)

    useEffect(() => {
        fetch('/intentions')
        .then(res => res.json())
        .then(data => {
            setIntentions(data)
            setIntentionLength(data.length)
            setDate(formatedDate)
        })
    }, [])

    console.log(intentions)
    let index = intentions.length - counter
        // for(let i = 0; i < ind; i++){
            //     console.log(i, index)
            // }

    function handleBack(event){
        console.log(counter)
        let prevIntentions = intentions[index]
        setIntentionData({
            question_1: prevIntentions.question_1,
            question_2: prevIntentions.question_2,
            question_3: prevIntentions.question_3,
        })
        setDate(prevIntentions.created_at)
        setLookBack(true)
        setCounter(counter + 1)
    }


    function handleNewForm(event){
        setIntentionData({ question_1: "", question_2: "", question_3: ""})
        setDate(formatedDate)
        setLookBack(false)
        setCounter(1)
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
        }).then((res) => res.json())
        .then((data) => console.log(data))
   } 

    return (
        <div className="intentions">
            <div className="form-layer">
            
            </div>
            <form className="intentions-form" onSubmit={handleSubmit}>
                <h2>Daily Intentions</h2>
                <p>{date}</p>
                <label>Question 1</label>
                <textarea name="question_1" value={intentionData.question_1} onChange={handleChange}/>
                <label>Question 2</label>
                <textarea name="question_2"value={intentionData.question_2} onChange={handleChange}/>
                <label>Question 3</label>
                <textarea name="question_3" value={intentionData.question_3} onChange={handleChange}/>
              
                {lookBack?  
                <div className="form-btns">
                    <button className="look-back" type="button" onClick={handleBack}>LOOK BACK</button> 
                    <button type="button" className="new" onClick={handleNewForm}>NEW</button> 
                </div>
              
                :
                <div className="form-btns">
                    <button className="look-back" type="button" onClick={handleBack}>LOOK BACK</button> 
                    <input className="submit" type="submit" value="SAVE"/>
                </div>
                }

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
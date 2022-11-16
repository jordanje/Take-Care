import { useEffect, useState } from "react"
import "./Intentions.css"
import PageToggler from "./PageToggler"
import Clouds from '../2.png'

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
            // 


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
        event.preventDefault();

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
        })
        .then((res) => res.json())
        .then((data) => {
            setIntentionData({ question_1: "", question_2: "", question_3: ""})
            setIntentions([...intentions, data])
    
            index = intentions.length - counter
        })
   } 


   function handleBack(event){
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

    return (
        <div className="intentions">
          
            <form className="intentions-form" onSubmit={handleSubmit}>
                <h2>Daily Intentions</h2>
                <p>{date}</p>
                <div className="more-info">For more info on 
                    <a href=" https://discoverbrillia.com/blogs/articles/how-setting-daily-intentions-can-reduce-stress" target='_blank'> benefits and tips!</a>
                </div>
                <textarea 
                name="question_1" 
                value={intentionData.question_1} 
                onChange={handleChange}
                placeholder ="What am I most excited about in my life today?"
                />
                <textarea 
                name="question_2"
                value={intentionData.question_2} 
                onChange={handleChange}
                placeholder ="What are the 3 things I'm grateful for today?"
                />
                <textarea 
                name="question_3" 
                value={intentionData.question_3} 
                onChange={handleChange}
                placeholder ="What can I do in order to make my goals easier?"
                />
              
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
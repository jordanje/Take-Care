import './DailyTip.css'
import mindfulessgif from '../minfulnessgif.png'
import mindfulnessTips from '../MindfulTips'

export default function DailyTip(){

    const tips = (mindfulnessTips) => {
        const randomIndex = Math.floor(Math.random() * mindfulnessTips.length)
        const item = mindfulnessTips[randomIndex]
        console.log(item)
        return item
    }

    const tip = tips(mindfulnessTips)


    return (
        <div className="daily-tip-container">
            <div className='header'>
            <h3>Mindfulness Tip</h3>
            <img  className='mindfulness-gif' src={mindfulessgif} />
            </div>
            <p>{tip}</p>
        </div>
    )
}
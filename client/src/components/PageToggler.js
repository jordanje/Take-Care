import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './PageToggler.css'

export default function PageToggler({setSwitchPage}){
    const [style1, setStyle1] = useState("btn-clicked")
    const [style2, setStyle2] = useState('btn-unclicked')
    const navigate = useNavigate()
    

    function handleMedClick(){
        setStyle1('btn-clicked')
        setStyle2('btn-unclicked')
        setSwitchPage(false)
    }

    function handleRefClick(){
        setStyle2('btn-clicked')
        setStyle1('btn-unclicked')
        setSwitchPage(true)
    }
    return (
        <div className='footer'>
            <div className='page-toggler'>
                <div className='toggler-btns'>
                    <button className={style1} onClick={handleMedClick}>Meditate</button>
                    <button className={style2} onClick={handleRefClick}>Reflect</button>
                </div>
            </div>
        </div>
    )
}
import ReactHowler from 'react-howler'

import { useState } from 'react'

export default function AudioController({audio, playing}){
 

    return (
        <div className='audio-controller'>
            <ReactHowler src={audio} playing={playing}/>
            {/* <button onClick={()=>setPlaying(true)}>Play</button>
            <button onClick={() => setPlaying(false)}>Pause</button> */}
        </div>
    )
}
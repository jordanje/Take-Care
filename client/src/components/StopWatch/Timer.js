export default function Timer(props){
    // let hours = ("0" + Math.floor((props.time)))
    // let minutes = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2)
    // let seconds = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2)
    let time = props.time

    const getSeconds = `0${(props.time % 60)}`.slice(-2)
    const minutes = `${Math.floor(props.time / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(props.time / 3600)}`.slice(-2)

    // const getSecond = `0${(time % 60)}`.slice(-2)
    // const minute = `${Math.floor(time / 60)}`
    // const getMinute = `0${minutes % 60}`.slice(-2)
    // const getHour = `0${Math.floor(time / 3600)}`.slice(-2)
    // console.log(`${getHour}:${getMinute}:${getSecond}`)
    return (
        <div className="timer">
        <span className="digits">
          {getHours}:
        </span>
        <span className="digits">
          {getMinutes}:
        </span>
        <span className="digits">
          {getSeconds}
        </span>
      </div>
    )
}
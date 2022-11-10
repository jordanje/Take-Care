import { useEffect, useState } from "react"

export default function ReflectionLog({ id}) {
    const [reflection, setReflection ] = useState([])

    useEffect(() => {
        fetch(`/meditation_reflections/${id}`)
        .then(data => data.json())
        .then(data => setReflection(data))
    }, [])


    return (
        <div>
            <p>{reflection.question_1}</p>
            <p>{reflection.question_2}</p>
            <p>{reflection.question_3}</p>
            <p>{reflection.question_4}</p>
        </div>
    )

}
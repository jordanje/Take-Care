import { useState } from "react"
export default function Signup () {
    const [ formData, setFormData ] = useState({
        username: "",
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        password_confirmation: ""
    })

    function handleFormChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        fetch("/users",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => console.log(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                />
                <input 
                    type="text" 
                    name="email"
                    value={formData.email}  
                    onChange={handleFormChange}
                />
                <input 
                    type="text" 
                    name="firstname"
                    value={formData.firstname}  
                    onChange={handleFormChange}
                />
                <input 
                    type="text" 
                    name="lastname"
                    value={formData.lastname}  
                    onChange={handleFormChange}
                />
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}  
                    onChange={handleFormChange}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
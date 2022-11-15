import { useState } from "react"

export default function Signup ({handleShowLogin}) {
    const [ formData, setFormData ] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
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
        .then(user => {
            setFormData({
                email: "",
                firstname: "",
                lastname: "",
                password: "",
            })
        })

        handleShowLogin()
    }

    return (
        <div className="signup-form-div">
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className='signup-form-header'>
                    <h2>Register</h2>
                    <div className='register-info'>
                        <p>Already have an account?</p>
                        <span onClick={handleShowLogin}>Log in</span>
                    </div>
                </div>
                <div className="name">
                    <input 
                        type="text" 
                        name="firstname"
                        placeholder="First name"
                        required
                        value={formData.firstname}  
                        onChange={handleFormChange}
                    />
                    <input 
                        type="text" 
                        name="lastname"
                        placeholder="Last name"
                        required
                        value={formData.lastname}  
                        onChange={handleFormChange}
                    />
                </div>
                <input 
                    type="text" 
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}  
                    onChange={handleFormChange}
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}  
                    onChange={handleFormChange}
                />
                <button className='signup-btn' type="submit">Sign up</button>
            </form>
        </div>
    )
}
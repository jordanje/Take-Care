import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ updateUser, handleShowSignup }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ errorss, setErrors ] = useState(null);
  
    let navigate = useNavigate();  

    function handleSubmit(e) {
      e.preventDefault();
      const user = {
        email,
        password
      };
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => {
          if(res.ok){
            res.json().then(user => {
              updateUser(user)
              navigate(`/userpage`)
            })
          } else {
            res.json().then(json => setErrors(json.errors))
          }
        })
    }

  
    return (
      <div className="login-form-div">
        
      <form  className="login-form" onSubmit={handleSubmit}>
      <div className="login-header">
          <h2>Log In</h2>
          <div className="login-info">
            <p>New to Take Care? </p>
            <span onClick={handleShowSignup}> Sign up for free!</span>
          </div>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            name="password"
            placeholder="Password"
            required
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">Log In</button>
      </form>
      </div>
    );
  }
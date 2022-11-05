import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ updateUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ errorss, setErrors ] = useState(null);
  
    let navigate = useNavigate();  

    function handleSubmit(e) {
      e.preventDefault();
      const user = {
        username,
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type="text" 
            name="password"
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
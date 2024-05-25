import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e){
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'content-type': 'application/json'}
    })
    console.log(response);
    if(response.status === 200){
      alert("Registration Successful")
    }else{
      alert("Registration Failed")
    }

  }

  return (
    <>
      <form className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;

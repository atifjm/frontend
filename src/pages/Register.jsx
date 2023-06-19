import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const handleSubmit = async(e) => {
    setError(false)
    e.preventDefault()

    const input = { name, email, id, password }
    try{
      const res = await axios.post("http://localhost:5000/api/auth/register", input)
      res.data && window.location.replace("/login")
    }
    catch(err){
      setError(true);
    }
    setName("");
    setEmail("");
    setId("")
    setPassword("");
  };

  return (
    <div className="register">
      <div className="f-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h2 style={{ color: "#1aac83" }}>Registration</h2>
          <div className="inputs">
            <label className="label">Enter Name</label>
            <input
              className=" input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="inputs">
            <label className="label">Enter Email</label>
            <input
              className=" input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="inputs">
            <label className="label">Enter User Id</label>
            <input
              className=" input"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
          <div className="inputs">
            <label className="label">Enter Password</label>
            <input
              className=" input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <span className="move">
            <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
              Already a user, go to Login Page
            </Link>
          </span>
          <button className="btn-register">Register</button>
          {error && <span className="move">Something is wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Register;

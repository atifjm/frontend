import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import { update } from "../redux/userSlice";

const Login = () => {
  const[id, setId] = useState("")
  const[password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const input = {id, password}
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", input )
      dispatch(update({id}))
      alert("Login Successful")
      navigate("/dashboard")
  
    } catch (err) {
      setError(true);
    }
    }

  return (
    <div className="login">
      <div className="f-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h2 style={{ color: "#1aac83" }}>LogIn</h2>

          <div className="inputs">
            <label className="label">Enter User Id</label>
            <input className=" input" type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
          </div>
          <div className="inputs">
            <label className="label">Enter Password</label>
            <input className=" input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <span className="move">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Not a user, go to Registration Page
            </Link>
          </span>
          <button className="btn-login">LogIn</button>
          {error && <span className="move">Something is wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;

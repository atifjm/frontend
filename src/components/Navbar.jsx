import { useSelector } from "react-redux"
import "./Navbar.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {remove} from "../redux/userSlice" 


const Navbar = () => {
  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  return (
    <div className="container">
        <div className="wrapper">
            <div className="logo"><Link to="/" style={{textDecoration:"none", color:"#1aac83"}}>Vehicles Management System</Link></div>
            <div className="menu">
              { id ? (<>{id} <span className="menu-item" onClick={(dispatch(remove({id})))}><Link to="/login" style={{textDecoration:"none", color:"grey"}}> Logout</Link></span> </>)
              :
              (<>
              <span className="menu-item"><Link to="/register" style={{textDecoration:"none", color:"grey"}}> Register</Link></span> 
              <span className="menu-item"><Link to="/login" style={{textDecoration:"none", color:"grey"}}>Login</Link></span> </>)
              }
              </div>
        </div>
    </div>
  )
}

export default Navbar

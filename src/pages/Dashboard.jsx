import "./Dashboard.css"
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button } from "@mui/material";
import  {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const StyledTable = styled(Table)`
  width: 100%;
  margin: auto;

`
const THead = styled(TableRow)`
  & > th {
    font-size: 15px;
  }    
`
const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState([])
    const keys = ["_id", "category", "brand", "model", "make", "color", "registration"]

    const getProducts = async() => {
        try{
            const res = await axios.get("http://localhost:5000/api/product/getproducts")
            setProducts(res.data)
            console.log(res)

        }catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/product/delete/${id}`)
            getProducts()
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='d-container'>
        <div className="d-wrapper">
            <div className="top">
                <div className="left">VMS</div>
                <div className="center">
                    <input className="input-search" type="text" placeholder="Search...." onChange={e=>setQuery(e.target.value)}/>
                </div>
                <div className="right">
                    <button className="btn-add"><Link to="/addrecord" style={{textDecoration:"none", backgroundColor:"#1aac83", color:"white"}}>Add New Record</Link></button>
                </div>
            </div>
            <div className="bottom">
            <StyledTable>
                    <TableHead>
                        <THead>
                            <TableCell>ID</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Make</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Reg No</TableCell>
                            <TableCell>Actions</TableCell>
                        </THead>
                    </TableHead>
                    <TableBody>
                    
                    {products.filter((product)=>(
                        product.category.toLowerCase().includes(query) ||
                        product.brand.toLowerCase().includes(query) ||
                        product.model.toLowerCase().includes(query) ||
                        product.color.toLowerCase().includes(query) ||
                        product.registration.toLowerCase().includes(query) ))
                        .map((product) => (
                        <TableRow>
                            <TableCell>{product._id}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.brand}</TableCell>
                            <TableCell>{product.model}</TableCell>
                            <TableCell>{product.make}</TableCell>
                            <TableCell>{product.color}</TableCell>
                            <TableCell>{product.registration}</TableCell>
                            <TableCell>
                                <Button style={{backgroundColor: "#1aac83", marginRight: "10px", color: "white", height: "25px", fontSize: "12px"}} ><Link to={`/editrecord/${product._id}`} style={{textDecoration:"none", backgroundColor:"#1aac83", color:"white", height: "25px"}}>Edit</Link></Button>
                                <Button onClick={()=>handleDelete(product._id)}style={{backgroundColor: "#e71959", marginRight: "10px", color: "white", height: "25px", fontSize: "12px"}}>Delete</Button>
                            </TableCell>
                        </TableRow>
                        ))
                    }
                    </TableBody>
                </StyledTable>
            </div>
        </div>
    </div>
  )
}
export default Dashboard

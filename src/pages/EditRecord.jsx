import "./EditRecord.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


const EditRecord = () => {
    const [product, setProduct] = useState({
        category: "",
        brand: "",
        model: "",
        make: "",
        color: "",
        registration: "",
    });

    const {id} = useParams("");
    console.log(id)
    
    useEffect(()=>{
        loadData()
    },[]);

    const loadData = async () => {
        try {
            let res = await axios.get(`http://localhost:5000/api/product/getproduct/${id}`)
            setProduct(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setProduct({...product, [e.target.name] : e.target.value})
        console.log(product)
      }
    
        const updateHandler = async (e) => {
            e.preventDefault()
        
            try {
                const res = await axios.put(`http://localhost:5000/api/product/update/${id}`, product)
                res.data && window.location.replace("/dashboard")
                alert("product updated successfully")
            } catch (err) {
                console.log(err)
            }
            console.log(product)
        }
    
      return (
        <div className="add-container">
            <div className="add-wrapper">
                <form onSubmit={updateHandler} className="form-data">
                    <h3 className="heading">Update Details</h3>
                    <div className="data">
                    <label className="d-label">Select Category </label>
                    <select className="d-select" name="category" value={product.category} onChange={handleChange}>
                        <option>Hatchback</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                    </select>
                    </div>
                    <div className="data">
                    <label className="d-label" >Enter Brand</label>
                    <input className="d-input" type="text" placeholder="Honda, Toyota, Nissan...." name="brand" value={product.brand} onChange={handleChange}></input>
                    </div>
                    <div className="data">
                    <label className="d-label" >Enter Model </label>
                    <input className="d-input" type="text" placeholder="Civic, City, Corolla...." name="model" value={product.model} onChange={handleChange}></input>
                    </div>
                    <div className="data">
                    <label className="d-label" >Enter Make</label>
                    <input className="d-input" type="text" placeholder="2010, 2020, 2022....." name="make" value={product.make} onChange={handleChange}></input>
                    </div>
                    <div className="data">
                    <label className="d-label" >Enter Color</label>
                    <input className="d-input" type="text" placeholder="White, Black, Red......" name="color" value={product.color} onChange={handleChange}></input>
                    </div>
                    <div className="data">
                    <label className="d-label" >Enter Registration No</label>
                    <input className="d-input" type="text" placeholder="LEE123, RIP258...." name="registration" value={product.registration} onChange={handleChange}></input>
                    </div>
    
                    <button className="btn-addnew">Update</button>
    
                </form>
            </div>
          
        </div>
      )
    }  

export default EditRecord

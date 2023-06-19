import { useState } from "react"
import "./AddRecord.css"
import axios from "axios"

const AddRecord = () => {
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [make, setMake] = useState("")
    const [color, setColor] = useState("")
    const [registration, setRegistration] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        const input = {category,brand,model,make,color,registration}
        try {
            const res = await axios.post("http://localhost:5000/api/product/add", input)
            res.data && window.location.replace("/dashboard")
            alert("product added successfully")
        } catch (err) {
            console.log(err)
        }
        console.log(input)
        setCategory("")
        setBrand("")
        setModel("")
        setMake("")
        setColor("")
        setRegistration("")
        
    }

  return (
    <div className="add-container">
        <div className="add-wrapper">
            <form onSubmit={submitHandler} className="form-data">
                <h3 className="heading">Add Details</h3>
                <div className="data">
                <label className="d-label">Select Category </label>
                <select className="d-select" value={category} onChange={e=>setCategory(e.target.value)}>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                </select>
                </div>
                <div className="data">
                <label className="d-label" >Enter Brand</label>
                <input className="d-input" type="text" placeholder="Honda, Toyota, Nissan...." value={brand} onChange={e=>setBrand(e.target.value)}></input>
                </div>
                <div className="data">
                <label className="d-label" >Enter Model </label>
                <input className="d-input" type="text" placeholder="Civic, City, Corolla...." value={model} onChange={e=>setModel(e.target.value)}></input>
                </div>
                <div className="data">
                <label className="d-label" >Enter Make</label>
                <input className="d-input" type="text" placeholder="2010, 2020, 2022....." value={make} onChange={e=>setMake(e.target.value)}></input>
                </div>
                <div className="data">
                <label className="d-label" >Enter Color</label>
                <input className="d-input" type="text" placeholder="White, Black, Red......" value={color} onChange={e=>setColor(e.target.value)}></input>
                </div>
                <div className="data">
                <label className="d-label" >Enter Registration No</label>
                <input className="d-input" type="text" placeholder="LEE123, RIP258...." value={registration} onChange={e=>setRegistration(e.target.value)}></input>
                </div>

                <button className="btn-addnew">Add</button>

            </form>
        </div>
      
    </div>
  )
}

export default AddRecord

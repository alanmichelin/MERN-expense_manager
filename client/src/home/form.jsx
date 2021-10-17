import React from "react"
import { useState } from "react"
const Axios = require('axios')

const Form = (props) =>{
    const [state,setState] = useState({
        description:'',
        amount:'',
        type:'',
        date:''
    })
    const handleChange = (e) =>{
        setState((prevProps)=> ({
            ...prevProps,
            [e.target.name]:e.target.value
        }))
        
        
    }

    const handleSubmit = (e) =>{
        var setNewItem ={
            description:state.description,
            amount: state.amount,
            OperationType:state.type,
            date:state.date
        }
        // aca va el query a SQL
        e.preventDefault()
        Axios.post('http://localhost:3001/insert',setNewItem)
        props.newItem()
        // console.log(state)
    }
    return(
    <form style={{textAlign:'left'}} onSubmit={handleSubmit}>
    <label>
        Description:
        <input type="text" name="description" value={state.description} onChange={handleChange} />
    </label>
        <br/>
    <label>
        Amount:
        <input type="number" name="amount" value={state.amount} onChange={handleChange} />
    </label>
        <br/>
    <label>
        Type:
        <select name="type" value={state.type} onChange={handleChange} >
            <option value="in">In</option>
            <option value="out">Out</option>
            <option value="" defaultValue hidden></option>
        </select>
    </label>
        <br/>
    <label>
        Date:
        <input value ={state.date} type="date" name="date" id="date" onChange={handleChange}  />
    </label>
        <br/>
    <input type="submit" value="Submit" />
    </form>
    )
}

export default Form
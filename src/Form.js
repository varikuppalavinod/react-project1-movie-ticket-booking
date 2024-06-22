
import "./form.css"
import {useState} from "react"
import {useDispatch} from "react-redux"

const Form=()=>{

const dispatch=useDispatch()

const[amount,setamount]=useState('')
const[name,setname]=useState('')
const[number,setnumber]=useState('')


const deposithandler=()=>{
    dispatch({type:"deposit",payload:amount})
    setamount("")
}

    return(
        <div className="form">
          <div>
          
            <input type="number" placeholder="enter amount"
             value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
            <button onClick={deposithandler}>Deposit</button>
            <button onClick={()=>{dispatch({type:"withdraw",payload:amount});setamount("")}}>Withdraw</button>
          </div>
          <div>
            
            <input type="text" placeholder="enter name"
            value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <button onClick={()=>{dispatch({type:"updatename",payload:name});setname("")}}>Update</button>
          </div>
          <div>
        
            <input type="number" placeholder="enter mobile number" value={number}
            onChange={(e)=>{setnumber(e.target.value)}}/>
            <button onClick={()=>{dispatch({type:"updatenumber",payload:number});setnumber("")}}>Update</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
          </div>
        </div>
    )
}
export default Form
import "./form.css"
import {useState} from "react"
import{Depositamount,Withdrawamount,Updatename,Updatenumber,Reset} from "./store"
import {useDispatch} from "react-redux"


const Form=()=>{
const[amount,setamount]=useState('')
const[name,setname]=useState('')
const[number,setnumber]=useState('')

const dispatch=useDispatch()

    return(
        <div className="form">
          <div>
          
            <input type="number" placeholder="enter amount" value={amount}
            onChange={(e)=>{setamount(e.target.value)}}/>
            <button onClick={()=>dispatch(Depositamount(amount),setamount(""))}>Deposit</button>
            <button onClick={()=>dispatch(Withdrawamount(amount),setamount(""))}>Withdraw</button>
          </div>
          <div>
            
            <input type="text" placeholder="enter name" value={name}
            onChange={(e)=>{setname(e.target.value)}}/>
            <button onClick={()=>dispatch(Updatename(name))}>Update</button>
          </div>
          <div>
        
            <input type="number" placeholder="enter mobile number" vlue={number}
            onChange={(e)=>{setnumber(e.target.value)}}/>
            <button onClick={()=>dispatch(Updatenumber(number))}>Update</button>
            <button onClick={()=>dispatch(Reset())}>reset</button>
          </div>
        </div>
    )
}
export default Form
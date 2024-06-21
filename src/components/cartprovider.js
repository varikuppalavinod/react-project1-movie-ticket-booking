

import React from "react"
import{useState} from "react"


const Cartcontext=React.createContext()

const Cartprovider=(props)=>{
    const[Data,setData]=useState([])
const additemtocarthandler=(item)=>{
      setData((prevdata)=>[...prevdata,item])
}
const removeitemtocarthandler=()=>{}

const obj={
    data:Data,
    add:additemtocarthandler,
    remove:removeitemtocarthandler,
}

     return(
        <Cartcontext.Provider value={obj}>
            {props.children}
        </Cartcontext.Provider>
     )
}
export {Cartprovider,Cartcontext}




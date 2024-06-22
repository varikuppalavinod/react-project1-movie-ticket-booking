import{createStore} from "redux"


const initialState={
    amount:0,
    fullname:"",
    mobilenumber:""
}

const accountreducer=(state=initialState,action)=>{
     
    if(action.type==="deposit"){
       return {...state,amount:state.amount+ +action.payload}
    }
    else if(action.type==="withdraw"){
        if(state.amount<action.payload){
          alert("insufficient balance")
        }else{
            return {...state,amount:state.amount- +action.payload}
        }
        return state
               
      //  return {...state,amount:state.amount- +action.payload}
    }
    
    
    else if(action.type==="updatename"){
      return {...state,fullname:action.payload}
    }
    else if(action.type==="updatenumber"){
        return {...state,mobilenumber:action.payload}
    }
    else if(action.type==="reset"){
        return initialState
    }
    else{
        return state
    }
}

const store=createStore(accountreducer)

export default store
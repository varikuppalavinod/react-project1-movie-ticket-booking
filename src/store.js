import{createSlice,configureStore} from "@reduxjs/toolkit"


const state={
    amount:0,
    name:"",
    mobilenumber:""
} 

const userslice=createSlice({
    name:"user",
    initialState:state,
    reducers:{
        Depositamount:(state,action)=>{
            state.amount=state.amount+ +action.payload
        },
        Withdrawamount:(state,action)=>{
            if(state.amount<action.payload){
               return alert("not a sufficient balance")
            }else{
                state.amount=state.amount- +action.payload

            }

          //  state.amount=state.amount- +action.payload

        },
        Updatename:(state,action)=>{
            state.name=action.payload
        },
        Updatenumber:(state,action)=>{
            state.mobilenumber=action.payload
        },
        Reset:()=>{
          return state;
        }
    }
    })

    const store=configureStore({
        reducer:{
            user:userslice.reducer,
        }
    })

    export const {Depositamount,Withdrawamount,Updatename,Updatenumber,Reset}=userslice.actions

    export default store

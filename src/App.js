

import {useReducer,useEffect,useState} from "react"
import "./App.css"




const App=()=>{
  const reducer=(state,action)=>{
    if(action.type==="updateuserdata"){
      return{
        ...state,
        userData:action.payload
      }
    }
    if(action.type==="Loading"){
      return{
        ...state,
        isLoading:action.payload
      }
    }
    if(action.type==="deleteuser"){
      const newdata=state.userData.filter((item)=>item.id!==action.payload)
      return{
        ...state,
        userData:newdata
      }
    }

    if(action.type==="edit"){
      return{
        ...state,
        isEditing:action.payload
      }
    }
    if(action.type==="update"){
      const newuser=state.userData.map((eachuser)=>{
         if(eachuser.id===action.payload.id){
          return{
            id:action.payload.id,
            name:action.payload.name,
            email:action.payload.email
          }
         }else{
          return eachuser
         }
      })
      return{
        ...state,
        userData:newuser
      }
    }
    return state;
  }
  
   const fetchingdata=async(apiurl)=>{
    dispatch({type:"Loading",payload:true})
    dispatch({type:"ERROR",payload:{status:false,msg:""}})
   try{
    const response= await fetch(apiurl)
    const responsedata= await response.json()
    console.log(responsedata)
    dispatch({ type:"updateuserdata", payload:responsedata})
    dispatch({type:"Loading",payload:false})

   }catch(error){
    console.log(error)
    dispatch({type:"Loading",payload:false})
    dispatch({type:"ERROR",payload:{status:true,msg:error.message}})
   }
   }
   useEffect(()=>{
   fetchingdata("https://jsonplaceholder.typicode.com/users")
   },[])

  const initialState={
    userData:[],
    isLoading:false,
    isError:{status:false,msg:""},
    isEditing:{status:false,id:"",name:"",email:""}
  }

  const[state,dispatch]=useReducer(reducer,initialState)

  if(state.isLoading){
  return(
    <h1>Loading...</h1>
  )
 }

 const deletehandle=(id)=>{
    dispatch({type:"deleteuser",payload:id})
 }
 const updateuserdata=(id,name,email)=>{
  dispatch({type:"update",payload:{id,name,email}})
  dispatch({type:"edit",payload:{status:false,id:"",name:"",email:""}})
 }


  return(
    <div style={{textAlign:"center" }}>
     {state.isEditing.status &&<Formcontainer id={state.isEditing.id} 
     nameid={state.isEditing.name}
     emailid={state.isEditing.email}
     updateuserdata={updateuserdata} />}
    {console.log("this is editing data",state.isEditing.id,state.isEditing.name,state.isEditing.email)}
      <h2>User information</h2>
      {state.userData.map((eachitem)=>{
        const{id,name,email}=eachitem
        return(
          <div key={id}  style={{background:"lightblue"}}>
          <h3>{name}</h3>
          <h3>{email}</h3>
          <button onClick={()=>{deletehandle(id)}}>delete</button>
          <button onClick={()=>dispatch({type:"edit",payload:{status:true,id:id,name:name,email:email}})}>edit</button>
          
          </div>
        
        )
      })}

    </div>
  )
}

const Formcontainer=({id,nameid,emailid,updateuserdata})=>{
  console.log(id,nameid,emailid)

  const[title,settitle]=useState(nameid)
  const[email,setemail]=useState(emailid)


  const submithandler=(e)=>{
    e.preventDefault()
    updateuserdata(id,title,email)

  }

  return(
   <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="title" name="title" value={title}
    onChange={(e)=>settitle(e.target.value)}/>
    <label htmlFor="email">Email</label>
    <input type="email" id="email"name="email" value={email}
    onChange={(e)=>setemail(e.target.value)}/>
    <button onClick={submithandler}>Update</button>
  </form>

  )
}

export default App

/*
import { useReducer, useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "updateuserdata":
        return {
          ...state,
          userData: action.payload,
        };
      case "Loading":
        return {
          ...state,
          isLoading: action.payload,
        };
      case "deleteuser":
        const newdata = state.userData.filter((item) => item.id !== action.payload);
        return {
          ...state,
          userData: newdata,
        };
      case "edit":
        return {
          ...state,
          isEditing: action.payload,
        };
      case "updateuser":
        const updatedUserData = state.userData.map((user) =>
          user.id === action.payload.id ? { ...user, name: action.payload.name, email: action.payload.email } : user
        );
        return {
          ...state,
          userData: updatedUserData,
          isEditing: { status: false, id: "", name: "", email: "" },
        };
      case "ERROR":
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
    isEditing: { status: false, id: "", name: "", email: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchingdata = async (apiurl) => {
    dispatch({ type: "Loading", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(apiurl);
      const responsedata = await response.json();
      console.log(responsedata);
      dispatch({ type: "updateuserdata", payload: responsedata });
      dispatch({ type: "Loading", payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "Loading", payload: false });
      dispatch({ type: "ERROR", payload: { status: true, msg: error.message } });
    }
  };

  useEffect(() => {
    fetchingdata("https://jsonplaceholder.typicode.com/users");
  }, []);

  if (state.isLoading) {
    return <h1>Loading...</h1>;
  }

  const deletehandle = (id) => {
    dispatch({ type: "deleteuser", payload: id });
  };

  const updateUserData = (id, name, email) => {
    dispatch({ type: "updateuser", payload: { id, name, email } });
  };

  return (
    <div style={{ textAlign: "center" }}>
      {state.isEditing.status && (
        <Formcontainer
          id={state.isEditing.id}
          name={state.isEditing.name}
          email={state.isEditing.email}
          updateUserData={updateUserData}
        />
      )}
      {console.log("this is editing data", state.isEditing.id, state.isEditing.name, state.isEditing.email)}
      <h2>User information</h2>
      {state.userData.map((eachitem) => {
        const { id, name, email } = eachitem;
        return (
          <div key={id} style={{ background: "lightblue" }}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button onClick={() => deletehandle(id)}>delete</button>
            <button onClick={() => dispatch({ type: "edit", payload: { status: true, id: id, name: name, email: email } })}>
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

const Formcontainer = ({ id, name, email, updateUserData }) => {
  console.log(id, name, email);

  const [title, setTitle] = useState(name);
  const [emailValue, setEmailValue] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData(id, title, emailValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default App;
*/
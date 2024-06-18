

import "./App.css"
import{useState} from "react"


const App=()=>{
  const[isediting,setisediting]=useState(true)
  const[list,setlist]=useState([])
  const[data,setdata]=useState({
    name:"",
    email:"",
    password:"",
    id:"",
  })

  const changehandler=(e)=>{
    
        setdata({
          ...data,
         [e.target.id]:e.target.value,
        })
        
  }
  const submithandler=(event)=>{
    event.preventDefault()
   
    if(data.id){
      let updatedlist=list.map((item)=>item.id===data.id
      ?{...item,name:data.name} : item
    );
    setlist(updatedlist)
    setdata({
      name:"",
      email:"",
      password:"",
      id:""
    })
      
    }else{
      let newtodo={
        name:data.name,
        email:data.email,
        password:data.password,
        id:Math.random(),
      }
      console.log(newtodo)
      setlist([...list,newtodo])
      setdata({
        name:"",
        email:"",
        password:"",
        id:"",
      })
    }
  }

  const deletehandler=(id)=>{
    const newlist=list.filter((item)=>item.id!==id)
      setlist(newlist)
  }
   
  const edithandler=(id)=>{
    const editdata=list.find((item)=>item.id===id)
    setdata({
      name:editdata.name,
      id:editdata.id,
      email:editdata.email,
      password:editdata.password,
    })
    setisediting(false)
  }
  const updatechange=()=>{
      setisediting(!isediting)
  }
  
 return(
  <div className="formpage" >
    <form className="form" onSubmit={submithandler}>
      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" minlength="4" maxlength="15" required value={data.name} onChange={changehandler}/>
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" minlength="5" maxlength="15" required value={data.email} onChange={changehandler}/>
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" minlength="5" maxlength="15" required value={data.password} onChange={changehandler}/>
      </div>
      <br></br>
     {isediting ?(<button type="submit">Add</button>):(<button onClick={updatechange}>Update</button>)}
    </form>
    <div className="data">
    <hr></hr>

    {list.length===0 && <h1>No Data</h1> }
    {list.map((item)=><ul>
      <li key={item.id}>
        {item.name}____{item.email}____{item.password}
        <button onClick={()=>{edithandler(item.id)}}>Edit</button>
        <button onClick={()=>{deletehandler(item.id)}}>Delete</button>
      </li>
    </ul>)}
  </div>
  </div>
 )
}
export default App


/*
import "./App.css";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    message: "",
    id: "",
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      message: e.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (data.id) {
      const updatedList = list.map((item) =>
        item.id === data.id ? { ...item, message: data.message } : item
      );
      setList(updatedList);
    } else {
      let newTodo = {
        message: data.message,
        id: Math.random(),
      };
      setList([...list, newTodo]);
    }
    setData({
      message: "",
      id: "",
    });
  };

  const deleteHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editHandler = (id) => {
    const editData = list.find((item) => item.id === id);
    setData({
      message: editData.message,
      id: editData.id,
    });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={data.message}
            onChange={changeHandler}
          />
        </div>
        <br />
        <button type="submit">{data.id ? "Update" : "Add"}</button>
      </form>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.message}
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/
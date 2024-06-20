

import{useEffect,useState} from "react"
import "./App.css"

const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const App=()=>{
  const[data,setdata]=useState([])
  const[searchslot,setsearchslot]=useState('')
  const[loading,setisloading]=useState(false)


  const fetchingdata=async(apiurl)=>{
    setisloading(true)
    try{
    const response=await fetch(apiurl)
    const {drinks}=await response.json()
    console.log(drinks)
    setdata(drinks)
    setisloading(false)
    }catch(error){
      console.log(error.message)
      setisloading(false)
    }
  }
    useEffect(() => {
    const initialURL = `${URL}a`; // Fetches data for cocktails starting with 'a'
    fetchingdata(initialURL);
  }, []); // Empty dependency array means this runs once when the component mounts


  useEffect(()=>{
    const correctURL=`${URL}${searchslot}`
    fetchingdata(correctURL)
  },[searchslot])
  return(
    <div>
    <div className="search">
      <input type="text" placeholder="search something new"
      value={searchslot} onChange={(e)=>{setsearchslot(e.target.value)}}/>
      </div>
      <hr></hr>
      {loading &&<h1>Loading...</h1>}
     <ul  className="cocktaildata">
     {data.map((item)=><li key={item.strDrink}>
        <div><img src={item.strDrinkThumb} alt={item.strDrink}/></div>
        <div>{item.strDrink}</div>
      </li>)}
     </ul>
    </div>
  )
}
export default App


/*
import {useEffect,useState} from "react"

const URL="https://jsonplaceholder.typicode.com/users"


const App=()=>{
  const[data,setdata]=useState([])
  const[loading,setloading]=useState(false)
  const[error,setiserror]=useState({status:false,msg:""})
  
  const fetchingmethod=async (apiurl)=>{

    setloading(true)
    setiserror({status:false,msg:""})
    try{
      const response= await fetch(apiurl)
      const responsedata= await response.json()
      console.log(responsedata)
      setdata(responsedata)
      setloading(false)
      setiserror({status:false,msg:""})
      if(response.status===404){
       throw new Error("data not found")
      }
    }catch(error){
     console.log(error.message)
     setloading(false)
     setiserror({status:true,msg:error.message||"something went wrong"})
     
    }
  }
     /*
    const fetchingmethod= (apiurl)=>{
      fetch(apiurl)
      .then((response)=>{
        if(response.ok){
          return response.json()
        }
        throw new Error("network response was not ok")
      }).then((response)=>{
        console.log(response)
        setdata(response)
      }).catch((error)=>{
        console.log(error.message)
      })
    }
    */
   /*
  useEffect(()=>{
    fetchingmethod(URL)
  },[])


  if(loading){
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  if(error.status){
    return <div>
            <h3 style={{color:"red"}}>{error.msg}</h3>
           </div>
  }
    return(
      <div>
        <h1>this is fetch method using useffect</h1>
        <hr></hr>
        {data.map((item)=>
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>)}


      </div>
    )
}
export default App
*/

/*
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

  const[Searchslot,setSearchslot]=useState('')

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

  const searchhandler=(e)=>{
   setSearchslot(e.target.value)
  }

  const filteredlist=list.filter((item)=>{
    if(!Searchslot){
        return true   // If the search input is empty, include all items
    }else{
      //return item.name===Searchslot;
      return item.name.toLowerCase().includes(Searchslot.toLowerCase());  // Check if the item's name
                                                                  //includes the search term, case-insensitively
    }
  })
 return(
  <div className="formpage" >
    <form className="form" onSubmit={submithandler}>
      
      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" minLength="4" maxLength="15"
       required value={data.name} onChange={changehandler}/>
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" minLength="5" maxLength="15" 
      required value={data.email} onChange={changehandler}/>
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" minLength="5" maxLength="15"
       required value={data.password} onChange={changehandler}/>
      </div>
      <br></br>
     {isediting ?(<button type="submit">Add</button>):(<button onClick={updatechange}>Update</button>)}
    </form>
    <div>
        <label htmlFor="search">SearchSlot :</label>
        <input type="text" id="search" value={Searchslot} onChange={searchhandler}/>
      </div>
    <div className="data">
    <hr></hr>
    {filteredlist.length===0 && <h1>No Data</h1> }
    {filteredlist.map((item)=><ul key={item.id}>
      <li>
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
*/


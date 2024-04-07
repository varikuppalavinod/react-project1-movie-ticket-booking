
import React,{useState} from "react"
import "./Component.css"


const Component=()=>{
    const[Book,setBook]=useState({
        name:"",
        number:"",
        id:""
    })
    const[List,setList]=useState([])
    const [searchSlot, setSearchSlot] = useState("");
    

    const changehandler=(e)=>{
         setBook({
            ...Book,
            [e.target.id]:e.target.value
         }) 

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        //ckecking if the serial number already exist or not
         const existingSerial = List.find(item => item.number === Book.number);
         if (existingSerial) {
             alert("Serial number already exists!");
             return; 
         }
        const newbook={
            name:Book.name,
            number:Book.number,
            id:Math.random()
        }
        setList([
            ...List,newbook
        ])
        setBook({
            name:'',
            number:'',
            id:''

        })
    }

    const deletehandle=(id)=>{
        const deletetodo=List.filter((eachitem)=>{
            return  eachitem.id!==id
            
        })
       setList(deletetodo)
    }

     const handleSearchSlot = (e) => {
        setSearchSlot(e.target.value);
    };

    // Filter the list based on the entered slot number
   const filteredlist=List.filter((item) => {
        if (!searchSlot) {
            return true; // If searchSlot is empty, return all items
        } else {
            return item.number === searchSlot; // Otherwise, return items with matching slot number
          
        }
       

        
    });
   
    
    return(
        <div>
            <form onSubmit={handlesubmit}>
        <div className="book">
            <h1>Movie Booking</h1>
            <p>Total Booking:{List.length}</p>
            <label htmlFor="slot">Find Slot:</label>
            <input type="number"
            id="slot"
            value={searchSlot}
            onChange={handleSearchSlot}
            placeholder="Enter slot number"
           
            ></input>
        </div>
        <br></br>
       
        <div>
            <label htmlFor="name">User Name:</label>
            <input type="text" id="name" value={Book.name} onChange={changehandler}></input>
            <label htmlFor="number">Serial Number:</label>
            <input type="number" id="number" value={Book.number} onChange={changehandler}></input>
            <button type="submit">Add</button>
        </div>
        </form>
        <br></br><br></br>
        {List.length===0 && <h2>Nothing present</h2>}
       
        <ul>
            {
                filteredlist.map((eachitem)=>{
                    const{name,number,id}=eachitem
                    return <li key={id}>
                           <span>{name}</span>
                           <span>{number}</span>
                           <button onClick={()=>{deletehandle(id)}}>delete</button>
                           <button>edit</button>
                    </li>
                })
            }
        </ul>
        </div>
    )
}
export default Component;



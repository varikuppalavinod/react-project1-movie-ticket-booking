 import{useReducer} from "react"



 const reducer=(state,action)=>{
    if(action.type==="delete-person"){
      const filterdata=state.data.filter((item)=>item.id!==action.payload)

      return{
        ...state,
        data:filterdata,
        length:filterdata.length,
        
      }
    
    }
    return state
   
 }

const App=()=>{
  const initialState={
     data:[{id:"1",name:"vinod",village:"chinthakuntla",dist:"nalgonda"},
           {id:"2",name:"ravi",village:"mallepally",dist:"hyderabad"}
     ],
     length:2,
  }
  const[state,dispatch]=useReducer(reducer,initialState)


  const deletehandler=(id)=>{
    dispatch({
      type:"delete-person",
      payload:id,
    })
     
  }

 return (
  <div>
    <h1>total length is:{state.length}</h1>
    {state.data.map((item)=>{
      const{id,name,village,dist}=item;
      return(
        <div key={id}>
          <h1>{name}</h1>
          <p>{village}</p>
          <p>{dist}</p>
          <button onClick={()=>{deletehandler(id)}}>Delete</button>
          <hr></hr>

        </div>
      )
    })}
  </div>
 )
}
export default App
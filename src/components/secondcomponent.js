import {Link,Outlet} from "react-router-dom"
import {Cartcontext} from "./cartprovider"
import{useContext} from "react"


const Secondcomponent=()=>{

  const cartctx=useContext(Cartcontext)

  console.log(cartctx)
  const addhandler=()=>{
    cartctx.add("vinod")
  }

 
  
  return(
    <div>
      
        <Link to='first'>first</Link>
        <br></br>
        
        <Link to="second">second</Link>
        <br></br>
        <button onClick={addhandler}>Addfunction</button>
        <h1>this is second component routing and subrouting concept</h1>
        <h1>{cartctx.name}</h1>
         <Outlet/>
         
    </div>
  )
}
export default Secondcomponent
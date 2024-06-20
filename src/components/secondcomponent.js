import {Link,Outlet} from "react-router-dom"

const secondcomponent=()=>{
  return(
    <div>
      
        <button><Link to='first'>first</Link></button>
        
        <button><Link to="second">second</Link></button>
        <h1>this is second component routing and subrouting concept</h1>
         <Outlet/>
    </div>
  )
}
export default secondcomponent
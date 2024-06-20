

import {Link} from "react-router-dom"

const Header=()=>{
  return(

         <div>
          <div style={{display:"flex", gap:"30px"}}>

           <h1><Link to="/">first component</Link></h1> 
           
           <h1> <Link to="/second">second component</Link></h1>
           
           </div>
           <hr></hr>
           </div>
    
  )
}
export default Header


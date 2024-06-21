import Header from "./components/Header"
import Firstcomponent from "./components/firstcomponent"
import Secondcomponent from "./components/Secondcomponent"
import First from "./components/first"
import Second from "./components/second"
import{BrowserRouter,Routes,Route} from "react-router-dom"


const App=()=>{
  return(
    <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Firstcomponent/>}/>
    <Route path="/second" element={<Secondcomponent/>}>
    <Route path="first" element={<First/>}/>
    <Route path="second" element={<Second/>}/>
    </Route>
   
  </Routes>
    </BrowserRouter>
  )
}
export default App
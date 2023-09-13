import Homepage from "./Home"
import CreateUser from "./Createuser"
import Users from "./User"
import EditUser from "./Edituser"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homepage></Homepage>
            <Routes>
                <Route element={<CreateUser/>} path="/createuser"></Route>
                <Route element={<Users/>} path="/user"></Route>
                <Route element={<EditUser/>} path="/edituser/:abc"></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
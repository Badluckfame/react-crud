import style from"./home.module.css"
import {Link} from "react-router-dom"
const Homepage=()=>{
    return(
        <div id={style.nav}>
            <Link to="/createuser">CREATE USER</Link>
            <Link to="/user">USER</Link>
        </div>
    )
}
export default Homepage
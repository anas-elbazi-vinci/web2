import { Outlet } from "react-router-dom"
import NavBar from "./navBar"

const App = () => {
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default App;
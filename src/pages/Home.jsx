import { Link } from "react-router-dom"
import Button from "../components/Button"
export default function Home(){

    return(<div className="bg-blue-50 h-screen">
        <h1>Home</h1>
        <Button><Link to="/signin">SignIn</Link></Button>
        <Button><Link to="/signup">SignUp</Link></Button>
        </div>)
}
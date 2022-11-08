import Button from "../components/Button"
import { useAuth } from "../hooks/auth";

export default function Albums(){
    const {signOut} = useAuth()

    return(<div className="bg-blue-50 h-screen">
        <h1>Albums</h1>
        <Button onClick={signOut}>SignOut</Button>
        </div>)
}
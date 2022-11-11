import {Link} from 'react-router-dom'
import {useAuth} from '../hooks/auth'

export default function Navbar(){
    const {signOut} = useAuth()
    return (
        <div className="bg-indigo-200">
            <h1 className="w-full">Albumzinho brabo</h1>
            <div>
            <nav>
                <Link to="/">Albums</Link>    
            </nav>
            <button onClick={signOut}>Logout</button>
            </div>
        </div>
    )
}


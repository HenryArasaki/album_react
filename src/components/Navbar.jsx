import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
        <div className="bg-indigo-200">
            <h1 className="w-full">Albumzinho brabo</h1>
            <nav>
                <Link to="/">Albums</Link>

            </nav>
        </div>
    )
}


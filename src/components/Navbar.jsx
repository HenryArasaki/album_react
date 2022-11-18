import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export default function Navbar() {
  const { signOut } = useAuth();
  return (
    <div >
      <h1 className="w-full text-xl lg:text-3xl ml-2">Albumzinho brabo</h1>
      <div className="flex flex-row justify-between">
        <nav>
          <Link className="p-2 text-lg" to="/">
            Home
          </Link>
          <Link className="p-2 text-lg" to="/albums">
            Albums
          </Link>
        </nav>
        <button className="mr-2" onClick={signOut}>Logout</button>
      </div>
    </div>
  );
}

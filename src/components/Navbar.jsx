import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export default function Navbar() {
  const { signOut } = useAuth();
  return (
    <div className="mt-1">
      <h1 className="w-full text-2xl lg:text-3xl ml-2 text-pink-500 ">Albumzinho brabo</h1>
      <div className="flex flex-row justify-between">
        <nav>
          <Link className="p-2 text-lg" to="/">
            Home
          </Link>
          <Link className="p-2 text-lg" to="/albums">
            Albums
          </Link>
        </nav>
        <button className="mr-4 text-slate-600 hover:text-slate-900" onClick={signOut}>Logout</button>
      </div>
    </div>
  );
}

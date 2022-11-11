import { useState, useEffect } from "react";
import { useAuth } from "../hooks/auth";
import Button from "../components/Button";
import { api } from "../service/api";

import Navbar from "../components/Navbar";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const { signOut, user } = useAuth();
  const { name } = user;

  useEffect(() => {
    async function fetchAlbums() {
      const response = await api.get("/albums");
      setAlbums(response.data);
    }
    fetchAlbums();
  });

  return (
    <div className="bg-blue-50 h-screen">
      <Navbar/>
      <ul>
        {albums &&
          albums.map((album) => {
            return <li key={album.id}>{album.name}</li>;
          })}
      </ul>
      <Button>Crate new Album</Button>
    </div>
  );
}

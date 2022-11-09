import { useState, useEffect } from "react";
import { useAuth } from "../hooks/auth";
import Button from "../components/Button";
import { api } from "../service/api";

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
      <h1>Albums</h1>
      <p>Olá, {name}</p>
      <ul>
        {albums &&
          albums.map((album) => {
            return <li key={album.id}>{album.name}</li>;
          })}
      </ul>
      <Button onClick={signOut}>SignOut</Button>
    </div>
  );
}

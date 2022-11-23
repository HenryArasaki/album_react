import { useState, useEffect } from "react";
import { useAuth } from "../hooks/auth";
import Button from "../components/Button";
import { api } from "../service/api";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import Navbar from "../components/Navbar";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  function handleCreateAlbum() {
    let name = prompt("Nome do album.", "Album");
    if (name != null) {
      api
        .post("/albums", { name, isPublic: false })
        .then(() => {
          alert("Album criado com sucesso");
          fetchAlbums();
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possivel criar o album");
          }
        });
    }
  }

  async function fetchAlbums() {
    const response = await api.get("/albums");
    setAlbums(response.data);
  }

  async function handleDeleteClick(album_id,album_name){
    if(confirm(`Deseja excluir o album ${album_name}?`)){
      await api.delete(`/albums/${album_id}`)
      fetchAlbums()
    }
  }

  useEffect(() => {
    fetchAlbums();
  });

  return (
    <div className="bg-slate-100 h-screen">
      <Navbar />
      <ul className="flex flex-wrap justify-center">
        {albums &&
          albums.map((album) => {
            return (
              <li
                key={album.id}
                className="bg-pink-500 hover:bg-pink-600 rounded text-white m-3 w-96 h-25 text-center text-lg md:text-2xl flex justify-around items-center"
              >
                <Link className="w-full h-full p-3" to={`/album/${album.id}`}>
                  {album.name}
                </Link>
                <AiOutlineDelete onClick={()=>handleDeleteClick(album.id,album.name)} size="1.5em" className="cursor-pointer mx-2" />
              </li>
            );
          })}
      </ul>
      <div className="m-5">
        <Button onClick={handleCreateAlbum}>Crate new Album</Button>
      </div>
    </div>
  );
}

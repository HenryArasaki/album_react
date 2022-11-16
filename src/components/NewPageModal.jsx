import { useState } from "react";
import Button from "./Button";
import { api } from "../service/api";


// https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
export default function NewPageModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState(null);

  const visible = props.visible
  const album_id = props.album_id

  function handleSubmit(){
    if (!title || !date || !photo){
        return alert("Preencha todos os dados")
    }
    if (!album_id){
        return alert("Erro no site. Por favor reinicie a pagina e tente novamente")
    }
    api.post(`/pages/${album_id}`,{title,description,date})
    .then(()=>{
        alert("Pagina criada com sucesso")
        fetchAlbums();
      })
      .catch(error=>{
        if(error.response){
          alert(error.response.data.message)
        }else{
          alert("Não foi possivel criar a pagina")
        }
      })

  }

  return (
    <>
      <section>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="page-title">Title:</label>
            <input
              id="page-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="page-description">Description:</label>
            <input
              id="page-description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="page-date">Date:</label>
            <input
              id="page-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="page-photo">Photo:</label>
            <input
              id="page-photo"
              type="file"
              value={photo}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
      <div></div>
    </>
  );
}

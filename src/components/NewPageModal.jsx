import { useState } from "react";
import Button from "./Button";
import { api } from "../service/api";

// https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
export default function NewPageModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");

  // const visible = props.visible;
  // const album_id = props.album_id;
  // const onModalClose = props.onModalClose;

  const {creatingNewPage,album_id,onModalClose} = props

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !date || !photo) {
      return alert("Preencha todos os dados");
    }
    if (!album_id) {
      return alert(
        "Erro no site. Por favor reinicie a pagina e tente novamente"
      );
    }
    api
      .post(`/pages/${album_id}`, { title, description, date, photo })
      .then(() => {
        alert("Pagina criada com sucesso");
        onModalClose();
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel criar a pagina");
        }
      });
  }

  async function handlePhotoChange(e) {
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPhoto(base64);
  }

  return (
    <div className={creatingNewPage == true ? "block" : "hidden"}>
      <section className="w-screen h-screen fixed">
        <div className="w-screen h-screen bg-black opacity-80 z-10" onClick={onModalClose}>
          <form className="z-20 bg-slate-100 flex flex-col w-5/6 lg:w-1/2 2xl:w-2/5 m-auto" onSubmit={handleSubmit}>
            <label className="m-5" htmlFor="page-title">Title:</label>
            <input
              id="page-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="m-5" htmlFor="page-description">Description:</label>
            <input
              id="page-description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="m-5" htmlFor="page-date">Date:</label>
            <input
              id="page-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="m-5"
            />
            <label className="ml-5 mt-5" htmlFor="page-photo">Photo:</label>
            <input
              id="page-photo"
              type="file"
              // value=""
              accept="image/png, image/gif, image/jpeg"
              onChange={handlePhotoChange}
              className="m-5"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
      <div></div>
    </div>
  );
}

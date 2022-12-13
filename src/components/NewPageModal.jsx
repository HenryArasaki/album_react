import { useState } from "react";
import Button from "./Button";
import { api } from "../service/api";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function NewPageModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState(null);

  const [isCreating, setIsCreating] = useState(false);

  const { creatingNewPage, album_id, onModalClose,fechPages } = props;

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !date || !photo) {
      return alert("Preencha todos os dados");
    }
    if (!album_id) {
      return alert(
        "Erro no site. Por favor reinicie a pagina e tente novamente"
      );
    }
    setIsCreating(true);
    api
      .post(`/pages/${album_id}`, { title, description, date, photo })
      .then(() => {
        alert("Pagina criada com sucesso");
        fechPages()
        onModalClose();
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel criar a pagina");
        }
      })
      .finally(()=>{
        setIsCreating(false);
        setTitle("")
        setDescription("")
        setDate("")
        setPhoto(null)
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
        <div
          className="w-screen h-screen bg-black opacity-80 z-10 fixed"
          onClick={onModalClose}
        ></div>
        <form
          className="z-20 flex flex-col w-5/6 lg:w-1/2  bg-slate-100 fixed inset-x-0 mx-auto mt-6 rounded-sm"
          onSubmit={handleSubmit}
        >
          <AiOutlineCloseCircle
            size="1.5em"
            className="self-end mt-2 mr-2"
            onClick={onModalClose}
          />
          <label className="m-5 -mt-5" htmlFor="page-title">
            Title:
          </label>
          <input
            id="page-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mx-5"
          />
          <label className="m-5" htmlFor="page-description">
            Description:
          </label>
          <input
            id="page-description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mx-5"
          />
          <label className="m-5" htmlFor="page-date">
            Date:
          </label>
          <input
            id="page-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mx-5"
          />
          <label className="ml-5 mt-5" htmlFor="page-photo">
            Photo:
          </label>
          <input
            id="page-photo"
            type="file"
            // value=""
            accept="image/x-png,image/gif,image/jpeg"
            onChange={handlePhotoChange}
            className="mx-5 mb-5"
          />
          <input
            className={isCreating?" bg-pink-800  rounded px-4 py-1 text-white w-72 m-5 self-center":"hover:cursor-pointer bg-pink-500 hover:bg-pink-600 rounded px-4 py-1 text-white w-72 m-5 self-center"}
            type="submit"
            value={isCreating?"Carregando...":"Enviar"}
          />
        </form>
      </section>
      <div></div>
    </div>
  );
}

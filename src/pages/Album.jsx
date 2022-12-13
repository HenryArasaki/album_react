import { useEffect, useState } from "react";
import { api } from "../service/api";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import NewPageModal from "../components/NewPageModal";
import Navbar from "../components/Navbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Album() {
  const [album, setAlbum] = useState({});
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [creatingNewPage, setCreatingNewPage] = useState(false);
  const { album_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // console.log(album_id)

  function handleLeftClick() {
    if (pageNumber > 0) {
      setPageNumber((prev) => prev - 1);
    }
  }

  function handleRightClick() {
    if (pageNumber < lastPage - 1) {
      setPageNumber((prev) => prev + 1);
    }
  }

  function handleNewPage() {
    creatingNewPage == false
      ? setCreatingNewPage(true)
      : setCreatingNewPage(false);
  }

  async function fechPages() {
    const response = await api.get(`/albums/${album_id}`);
    console.log(response)
    setAlbum(response.data);
    setPages(response.data.pages);
    setIsLoading(false);
    // console.log(response.data.pages)
  }
  function handleModalClose() {
    setCreatingNewPage(false);
    fechPages();
  }

  useEffect(() => {
    fechPages();
  }, []);

  useEffect(()=>{
    setLastPage(pages.length);

  },[pages])



  if (isLoading) {
    return (
      <div className="bg-slate-100 h-screen">
        <Navbar />
        <span className="ml-5">Carregando...</span>
      </div>
    );
  }

  if (pages.length > 0) {
    return (
      <div className="bg-slate-100 h-screen">
        <Navbar />
        <NewPageModal
          creatingNewPage={creatingNewPage}
          album_id={album_id}
          onModalClose={handleModalClose}
          fechPages={fechPages}
        />
        {pages.map((page, index) => {
          return (
            <Page
              pageNumber={pageNumber}
              thisPage={index}
              key={page.id}
              details={page}
            />
          );
        })}
        <div className="flex justify-around mt-20 ">
          <button
            className={
              pageNumber > 0
                ? "bg-pink-500 hover:bg-pink-600 rounded px-4 py-1 text-white text-5xl shadow-md"
                : "bg-pink-800  rounded px-4 py-1 text-white text-5xl shadow-md cursor-default"
            }
            onClick={handleLeftClick}
          >
            <FiArrowLeft />
          </button>
          <Button onClick={handleNewPage}>New page</Button>

          <button
            className={
              pageNumber < lastPage - 1
                ? "bg-pink-500 hover:bg-pink-600 rounded px-4 py-1 text-white text-5xl shadow-md"
                : "bg-pink-800  rounded px-4 py-1 text-white text-5xl shadow-md cursor-default"
            }
            onClick={handleRightClick}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-100 h-screen">
        <Navbar />
        <NewPageModal
          creatingNewPage={creatingNewPage}
          album_id={album_id}
          onModalClose={handleModalClose}
        />
        <p className="text-3xl m-3">Album sem paginas</p>
        <Button className="ml-3" onClick={handleNewPage}>
          New page
        </Button>
      </div>
    );
  }
}

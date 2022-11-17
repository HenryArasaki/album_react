import { useEffect, useState } from "react";
import { api } from "../service/api";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import NewPageModal from "../components/NewPageModal";
import Navbar from "../components/Navbar";

export default function Album() {
  const [album, setAlbum] = useState({});
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [creatingNewPage, setCreatingNewPage] = useState(false);
  const { album_id } = useParams();
  // console.log(album_id)

  function handleLeftClick() {
    if (pageNumber > 0) {
      setPageNumber((prev) => prev - 1);
      console.log("left");
    }
  }

  function handleRightClick() {
    if (pageNumber < lastPage - 1) {
      setPageNumber((prev) => prev + 1);
      console.log("right");
    }
  }

  function handleNewPage() {
    setCreatingNewPage(true);
  }

  async function fechPages() {
    const response = await api.get(`/albums/${album_id}`);
    setAlbum(response.data);
    setPages(response.data.pages);
    // console.log(response.data.pages)
  }
  function handleModalClose() {
    setCreatingNewPage(false);
    fechPages();
  }

  useEffect(() => {
    fechPages();
  }, []);

  useEffect(() => {
    console.log(pageNumber);
  });

  useEffect(() => {
    setLastPage(pages.length);
  }, [pages]);

  if (!album) {
    return (
      <>
        <Navbar />
        <span>Carregando...</span>
      </>
    );
  } else {
    if (pages) {
      return (
        <>
          <Navbar />
          <NewPageModal
            creatingNewPage={creatingNewPage}
            album_id={album_id}
            onModalClose={handleModalClose}
          />
          <Button onClick={handleNewPage}>New page</Button>
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
          <Button onClick={handleLeftClick}>&#60;</Button>
          <Button onClick={handleRightClick}>&#62;</Button>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <span>Album sem paginas</span>
        </>
      );
    }
  }
}

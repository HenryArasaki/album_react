import { useEffect, useState } from "react";
import { api } from "../service/api";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";

export default function Album() {
  const [album, setAlbum] = useState({});
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const { album_id } = useParams();



  function handleLeftClick(){
    setPageNumber(prev=>prev - 1)
  }

  function handleRightClick(){
    setPageNumber(prev=>prev + 1)
  }

  useEffect(() => {
    async function fechPages() {
      const response = await api.get(`/albums/${album_id}`);
      setAlbum(response.album);
      setPages(response.pages,()=>setLastPage(pages.length));
    }
  }, [album, pages]);

  if (!album) {
    return <span>Carregando...</span>;
  } else {
    if (pages) {
      return (
        <>
          <Button disabled={pageNumber<=0} onClick={handleLeftClick}>&#47;</Button>
          <Button disabled={pageNumber>=lastPage} onClick={handleRightClick}>&#47;</Button>
        </>
      );
      pages.map(page, (index) => (
        <Page visibility={index == pageNumber} key={index} details={page} />
      ));
    } else {
      return <span>Album sem paginas</span>;
    }
  }
}

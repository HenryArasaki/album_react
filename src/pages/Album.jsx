import { useEffect, useState } from "react";
import { api } from "../service/api";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";
import NewPageModal from "../components/NewPageModal";

export default function Album() {
  const [album, setAlbum] = useState({});
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [creatingNewPage, setCreatingNewPage] =useState(false)
  const { album_id } = useParams();
  console.log(album_id)
  let lastPage = 0



  function handleLeftClick(){
    setPageNumber(prev=>prev - 1)
  }

  function handleRightClick(){
    setPageNumber(prev=>prev + 1)
  }

  function handleNewPage(){

  }

  useEffect(() => {
    async function fechPages() {
      const response = await api.get(`/albums/${album_id}`);
      setAlbum(response.data);
      setPages(response.data.pages);
      console.log(response.data.pages)
    }
    fechPages()
  }, []);

  useEffect(()=>{
    lastPage = pages.length
  },[pages])

  if (!album) {
    return <span>Carregando...</span>;
  } else {
    <NewPageModal visible={creatingNewPage} album_id={album_id}/>
    if (pages) {
      return (
        <> 
          <Button onClick={handleNewPage}>New page</Button>
          {pages.map(page,index=>{
            return <Page visibility={index == pageNumber} key={page.id} details={page} />
          })}
          <Button disabled={pageNumber<=0} onClick={handleLeftClick}>&#60;</Button>
          <Button disabled={pageNumber>=lastPage} onClick={handleRightClick}>&#62;</Button>
        </>
      );
    } else {
      return <span>Album sem paginas</span>;
    }
  }
}

import { useEffect, useState } from "react";
import { api } from "../service/api";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";

export default function Album() {
  const [album, setAlbum] = useState({});
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { album_id } = useParams();
  console.log(album_id)
  let lastPage = 0



  function handleLeftClick(){
    setPageNumber(prev=>prev - 1)
  }

  function handleRightClick(){
    setPageNumber(prev=>prev + 1)
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
    if (pages) {
      return (
        <>
          {pages.map(page,index=>{
            return (<div key={page.id} pagina={page.id}>
              <h3>{page.date} - {page.title}</h3>
              <img src={page.photo} alt="" />
              <p>{page.description}</p>
            </div>)
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

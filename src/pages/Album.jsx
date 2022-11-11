import {useEffect,useState} from 'react'
import { api } from "../service/api";
import { useParams } from 'react-router-dom';
import Button from '../components/Button'

export default function Album(){
    const [album,setAlbum] = useState({})
    const [pages,setPages] = useState([])
    const {album_id} = useParams()

    useEffect(()=>{
        async function fechPages(){
            const response = await api.get(`/albums/${album_id}`)
            setPages(response.pages)
            setAlbum(response.album)
        }
    },[album,pages])



    if(!album){
        return <span>Carregando...</span>
    }else{
        if(pages){
            
        }else{
            return <span>Album sem paginas</span>
        }
    }
    

}
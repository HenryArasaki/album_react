import {useEffect,useState} from 'react'
import { api } from "../service/api";

export default function Album(){
    const [pages,setPages] = useState([])

    useEffect(()=>{
        async function fechPages(){
            const response = await api.get()
        }
    },[])
}
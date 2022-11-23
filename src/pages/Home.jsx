import { Link } from "react-router-dom"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import {useState,useEffect} from 'react'

export default function Home(){
    const [name,setName] = useState("")

    useEffect(()=>{
        setName(JSON.parse(localStorage.getItem("@album:user")).name.split(" ")[0])
    },[])

    return(<div className="bg-slate-100 h-screen">

        <Navbar />
        <h2 className="text-6xl text-center mt-10">Olá, {name}!</h2>
        </div>)
}
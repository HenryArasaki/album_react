import {Routes,Route} from 'react-router-dom'
import Albums from '../pages/Albums'
import Home from '../pages/Home'


export default function AppRoutes(){
    return(<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/album/:album_id" element={<Album/>}/>
        <Route path="/albums" element={<Albums/>}/>


    </Routes>)
}
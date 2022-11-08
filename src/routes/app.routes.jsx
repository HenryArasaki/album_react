import {Routes,Route} from 'react-router-dom'
import Albums from '../pages/Albums'


export default function AppRoutes(){
    return(<Routes>
        
        <Route path="/" element={<Albums/>}/>


    </Routes>)
}
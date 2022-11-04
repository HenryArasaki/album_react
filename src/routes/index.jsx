import { useAuth } from '../hooks/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes(){
const {user} = useAuth()

    
        // if (user){
        //     return <AppRoutes/>
        // }else{
        //     return <AuthRoutes/>
        // }
        return(<>
         { user ? <AppRoutes/> : <AuthRoutes/>}
         </>)
}
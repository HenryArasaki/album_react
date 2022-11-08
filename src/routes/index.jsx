import { useAuth } from '../hooks/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes(){
const {user} = useAuth()

        return(<>
         { user ? <AppRoutes/> : <AuthRoutes/>}
         </>)
}
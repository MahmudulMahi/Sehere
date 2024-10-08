import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/authinticaton/home/Home'
import Login from '../pages/authinticaton/Login'
import Registration from '../pages/authinticaton/Registration'

const router=createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ]
  }
])

export default router
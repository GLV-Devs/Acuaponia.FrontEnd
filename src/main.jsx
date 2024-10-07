import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import appContextProvider from './context/contextProvider'
import { Root } from './pages/root'
import { errorPage } from './pages/errorPage'
import { login } from './pages/login'
import { dashboard } from './pages/dashboard'
import { subServerSearch } from './pages/subSeverSearch'
import { subServer } from './pages/subServer'
import { individualDevice } from './pages/individualDevice'
import { subServerSession } from './pages/subServerSession'
import { individualReactor } from './pages/individualReactor'
import { profile } from './pages/profile'
import { userCreation } from './pages/userCreation'
import { deviceCreation } from './pages/deviceCreation'
import { reportCreation } from './pages/reportCreation'
import { notificationCreation } from './pages/notificationCreation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <errorPage/>,
    children: [
      {
        path: '/ch1',
        element: <login/>
      },
      {
        path: '/ch2',
        element: <dashboard/>
      },
      {
        path: '/ch3',
        element: <subServerSearch/>
      },
      {
        path: '/ch4',
        element: <subServer/>
      },
      {
        path: '/ch5',
        element: <individualDevice/>
      },
      {
        path: '/ch6',
        element: <subServerSession/>
      },
      {
        path: '/ch7',
        element: <individualReactor/>
      },
      {
        path: '/ch8',
        element: <profile/>
      },
      {
        path: '/ch9',
        element: <userCreation/>
      },
      {
        path: '/ch10',
        element: <deviceCreation/>
      },
      {
        path: '/ch11',
        element: <reportCreation/>
      },
      {
        path: '/ch12',
        element: <notificationCreation/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <appContextProvider>
    <RouterProvider  router={router}/>
  </appContextProvider>
)

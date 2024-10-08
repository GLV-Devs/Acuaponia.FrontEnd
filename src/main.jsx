import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContextProvider from './context/contextProvider'
import Root from './pages/root'
import ErrorPage from './pages/errorPage'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import SubServerSearch from './pages/subSeverSearch'
import SubServer from './pages/subServer'
import IndividualDevice from './pages/individualDevice'
import SubServerSession from './pages/subServerSession'
import IndividualReactor from './pages/individualReactor'
import Profile from './pages/profile'
import UserCreation from './pages/userCreation'
import DeviceCreation from './pages/deviceCreation'
import ReportCreation from './pages/reportCreation'
import NotificationCreation from './pages/notificationCreation'
import './style.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/Login',
        element: <Login/>
      },
      {
        path: '/Dashboard',
        element: <Dashboard/>
      },
      {
        path: '/SubServerSearch',
        element: <SubServerSearch/>
      },
      {
        path: '/SubServer',
        element: <SubServer/>
      },
      {
        path: '/IndividualDevice',
        element: <IndividualDevice/>
      },
      {
        path: '/SubServerSession',
        element: <SubServerSession/>
      },
      {
        path: '/IndividualReactor',
        element: <IndividualReactor/>
      },
      {
        path: '/Profile',
        element: <Profile/>
      },
      {
        path: '/UserCreation',
        element: <UserCreation/>
      },
      {
        path: '/DeviceCreation',
        element: <DeviceCreation/>
      },
      {
        path: '/ReportCreation',
        element: <ReportCreation/>
      },
      {
        path: '/NotificationCreation',
        element: <NotificationCreation/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <RouterProvider  router={router}/>
  </AppContextProvider>
)

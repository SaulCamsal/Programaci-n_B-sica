import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { List } from './components/List.tsx'
//import { loader as detailLoader} from './components/List.tsx'
import { Details } from './components/Details'
import { loader as detailLoader} from './components/Details'
import { RootLayaout } from './routes/RoutLayaout.tsx'


const routerConfig = createBrowserRouter([
  {path: "/", element: <RootLayaout/>, children:[
  {path: "/", element: <App/>},
  {path: "/list", element: <List/>},
  {path: "/details/:name", element: <Details/>, loader:detailLoader}
    
  ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>,
)

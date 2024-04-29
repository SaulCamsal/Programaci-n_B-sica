import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { List } from './components/List.tsx'
import { Details } from './components/Details'
import { RootLayaout } from './routes/RoutLayaout.tsx'


const routerConfig = createBrowserRouter([
  {path: "/", element: <RootLayaout/>, children:[
  {path: "/", element: <App/>},
  {path: "/List", element: <List/>},
  {path: "/Details", element: <Details/>}
  ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>,
)

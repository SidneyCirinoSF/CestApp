import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Login from './pages/Login'
import Inscritos from './pages/Home/inscritos'
import Settings from './pages/Home/alterar'
import LandingPage from './pages/LandingPage'

// instalar o tailwind. Passo a passo: https://tailwindcss.com/docs/installation/using-vite

const router = createBrowserRouter([
  { path:"/", element:<LandingPage />},
  { path:"/login", element:<Login />},
  { path:"/cadastro", element:<Cadastro />},
  { path:"/home", element:<Home />},
  { path:"/home/inscritos", element:<Inscritos />},
  { path:"/home/alterar", element:<Settings />},
  { path:"/landingpage", element:<LandingPage />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <RouterProvider router={router} />    
  </StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Notes from './componets/Notes';
import Viewnote from './componets/Viewnote';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar>
        </Navbar>
        <Home></Home>
      </div>
    },
    {
      path: "/Paste",
      element: <div>
        <Navbar>
        </Navbar>
        <Notes></Notes>
      </div>
    },
    {
      path: "/Paste/:id",
      element: <div>
        <Navbar>
        </Navbar>
        <Viewnote></Viewnote>
      </div>
    },
    // {
    //   path:"/",
    //   element:<div>
    //     <Navbar>
    //     </Navbar>
    //     <Home></Home>
    //   </div>
    // },
    {
      path: "/",
      element: <div>
        <Navbar>
        </Navbar>
        <Home></Home>
      </div>
    },

  ]

)

function App() {


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>

  )
}

export default App

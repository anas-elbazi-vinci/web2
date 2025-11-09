import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './components/Page/HomePage'
import CinemaPage from './components/Page/CinemaPage'
import MovieListPage from './components/Page/MovieListPage'
import App from './components/app'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :[
        {
      path : "/",
      element:<HomePage/>
    },
    {
      path :"/cinema",
      element : <CinemaPage/>
    },
    {
      path:"/movieList",
      element:<MovieListPage/>
    }
      ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

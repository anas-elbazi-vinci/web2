import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './design-system.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './components/Page/HomePage'
import CinemaPage from './components/Page/CinemaPage'
import MovieListPage from './components/Page/MovieListPage'
import App from './components/app'
import AddFilmPage from './components/Page/AddFilmPage'
import MoviePage from './components/Page/MoviePage'

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
    },
    {
      path:"/addFilm",
      element:<AddFilmPage/>
    },
    {
      path:"/movie/:id",
      element:<MoviePage/>
    }
      ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

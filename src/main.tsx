import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home, { getNews } from './Pages/Home.tsx'
import ErrorPages from './Pages/ErrorPage.tsx'
import AllNews from './Pages/AllNews.tsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: ([
      {
        path: '/',
        loader: getNews,
        element: <Home />,
        errorElement: <ErrorPages />
      },
      {
        path: '/see-all',
        element: <AllNews />,
        errorElement: <ErrorPages />
      }
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
)

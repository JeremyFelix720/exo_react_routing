
// On met les routes ici.

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Connexion from './components/Connexion'

export default function App() {
  //const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    },
    {
        path: "/home",
        element: <Home />,
      },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
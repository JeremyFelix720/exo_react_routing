
// APP = on met le router ici.

import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default function App() {
  //const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

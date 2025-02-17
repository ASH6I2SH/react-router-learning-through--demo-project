import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  //   [
  //   {
  //     path: '/',
  //     element: <App />,
  //     children: [
  //       {
  //         path: "about",
  //         element: <About />
  //       },
  //       {
  //         path: "",
  //         element: <Home />
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact/>
  //       },
  //       {
  //         path: 'user/:userid',
  //         element: <User/>
  //       },

  //       {
  //         path: 'github', 
  //         loader: {githubInfoLoader},
  //         element: <Github/>
  //       }
  //     ]
  //   }
  //
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


import './App.css'
import { createBrowserRouter, Link } from 'react-router-dom'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Home from './components/Home'
import Result from './components/Result'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/startquiz',
      element:<><Navbar/><Quiz/></>
    },
    {
      path:'/results',
      element:<><Navbar/><Results/></>
    },
    {
      path:'/result',
      element:<><Navbar/><Result/></>
    }
  ])
  return ( 
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import Chatbot from './components/Chatbot.jsx'
import Layout from './Layout.jsx'
import Article from './components/Article.jsx'
import About from './components/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/chatbot' element={<Chatbot />} />
      <Route path='/about' element={<About />} />
      <Route path='/article' element={<Article />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
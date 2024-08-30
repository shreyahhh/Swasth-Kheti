import { useState } from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import ChatBot from './components/Chatbot'
import Detection from './components/Detection'


function App() {

  return (
    <>
    <Nav />
    <Home />
    <Detection />
    <ChatBot />
    </>
  )
}

export default App

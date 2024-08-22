import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import * as ReactDOM from "react-dom/client";
import Login from './pages/Login'

function App() {
  return (
    <>
      <Login />
    </>
  )
}

export default App

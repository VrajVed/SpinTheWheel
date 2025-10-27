import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpinWheel from './components/ui/SpintheWheel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SpinWheel />
    </>
  )
}

export default App

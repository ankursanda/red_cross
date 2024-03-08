import { useState } from 'react'
import Login_nav from "./components/Login_nav"
import Des_card from './components/Des_card'
import Policy_card from './components/Policy_card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login_nav />
     <Des_card />
     <Policy_card />
    </>
  )
}

export default App

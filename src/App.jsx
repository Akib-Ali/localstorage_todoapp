import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TodoMain } from './ToddApp/todomain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TodoMain/>
    </div>
  )
}

export default App

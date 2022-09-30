import { useState } from 'react'
import todoLogo from './assets/todo-logo.svg'
import { Header } from './components/Header'
import { Task } from './components/Task'
import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Task />
    </div>
  )
}

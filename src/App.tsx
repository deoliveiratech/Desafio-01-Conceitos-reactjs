import { Header } from './components/Header'
import { Task } from './components/Task'

import './global.css';
import styles from './App.module.css';
import { TaskListStatus } from './components/TaskListStatus';


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Task />
        <TaskListStatus />
      </div>
      
    </div>
  )
}

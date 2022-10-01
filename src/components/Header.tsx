import todoLogo from '../assets/todo-logo.svg';

import styles from './Header.module.css';  

export function Header() {
    return (
        <div className={styles.header}>
          <img src={todoLogo} alt="todo logo" />
      </div>
    )
}
import ToDoLogo from '../../assets/todo-logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ToDoLogo} alt="todo logo" />
    </header>
  )
}

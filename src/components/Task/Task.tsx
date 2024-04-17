import { Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { Task as TaskInterface } from '../TasksList/TasksList'

interface TaskProps {
  task: TaskInterface
  onDelete: (content: string) => void
  onChangeStatus: (content: string) => void
}

export function Task({ task, onDelete, onChangeStatus }: TaskProps) {
  const isDone = task.status === 'done'

  function handleStatus() {
    onChangeStatus(task.content)
  }

  function handleDelete() {
    onDelete(task.content)
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="checkbox" className={styles.label} onClick={handleStatus}>
        <input
          readOnly
          type="checkbox"
          className={styles.checkbox}
          checked={isDone}
        />
        <span className={styles.checkmark}></span>
        <p>{task.content}</p>
      </label>
      <button
        type="button"
        onClick={handleDelete}
        className={styles.deleteButton}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}

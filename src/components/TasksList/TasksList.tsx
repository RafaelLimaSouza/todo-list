import { PlusCircle } from '@phosphor-icons/react'

import styles from './TasksList.module.css'
import { Task } from '../Task/Task'
import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { EmptyMessage } from '../EmptyMessage/EmptyMessage'

export interface Task {
  content: string
  status: 'done' | 'pendent'
}

export function TasksList() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setNewTasks] = useState<Task[]>([])

  const handleOnChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    setNewTasks((state) =>
      state.concat({
        content: newTask,
        status: 'pendent',
      }),
    )
    setNewTask('')
  }

  const handleOnDelete = (content: string) => {
    setNewTasks((state) => state.filter((task) => task.content !== content))
  }

  const handleChangeStatus = (content: string) => {
    setNewTasks((state) =>
      state.map((task) => {
        if (task.content === content) {
          return task.status === 'pendent'
            ? {
                ...task,
                status: 'done',
              }
            : {
                ...task,
                status: 'pendent',
              }
        }

        return task
      }),
    )
  }

  const countTasks = tasks.length

  const countTasksDone = tasks.reduce((acc: number, cur: Task) => {
    if (cur.status === 'done') return (acc = acc + 1)

    return acc
  }, 0)

  return (
    <div className={styles.container}>
      <form action="#" onSubmit={handleOnSubmit}>
        <div className={styles.row}>
          <Input
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleOnChangeTask}
          />
          <Button type="submit">
            Criar
            <PlusCircle size={20} />
          </Button>
        </div>
        <div className={styles.infoRow}>
          <div>
            <span className={styles.created}>Tarefas criadas</span>
            <span className={styles.counter}>{countTasks}</span>
          </div>
          <div>
            <span className={styles.finished}>Concluídas</span>
            <span className={styles.counter}>
              {countTasks === 0
                ? countTasks
                : `${countTasksDone} de ${countTasks}`}
            </span>
          </div>
        </div>

        {tasks.length > 0 ? (
          <ul className={styles.list}>
            {tasks.map((task: Task) => (
              <Task
                key={task.content}
                task={task}
                onDelete={handleOnDelete}
                onChangeStatus={handleChangeStatus}
              />
            ))}
          </ul>
        ) : (
          <EmptyMessage />
        )}
      </form>
    </div>
  )
}

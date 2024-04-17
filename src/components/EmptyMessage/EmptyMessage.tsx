import Clipboard from '../../assets/clipboard.svg'

import styles from './EmptyMessage.module.css'

export function EmptyMessage() {
  return (
    <div className={styles.message}>
      <img src={Clipboard} alt="clipboard icon" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}

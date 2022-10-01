import styles from './TaskListStatus.module.css'

export function TaskListStatus() {
    return (
        <div className={styles.taskListStatus}>
            <strong className={styles.taskCreate}>Tarefas criadas<span>5</span></strong>
            <strong>Concluídas<span>2 de 5</span></strong>
        </div>
    )
}
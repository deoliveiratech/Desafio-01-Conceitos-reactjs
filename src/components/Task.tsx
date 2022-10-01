import styles from './Task.module.css';
import {PlusCircle} from 'phosphor-react';

export function Task(){
    return(
        <div className={styles.task}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <a href='#'>
                Criar
                <PlusCircle size={20} />
            </a>

            <div className={styles.taskListStatus}>
                <strong>Tarefas criadas</strong>
                <strong>Concluídas</strong>
            </div>
            
            
        </div>
    )
}
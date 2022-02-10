import { ITask } from "../../../types/ITask";
import style from "./item.module.scss";

interface Props extends ITask {
  selectTask: (currentTask: ITask) => void,
}

export default function Item({ task, time, select, complet, id, selectTask }: Props) {
  return (
    <li className={`${style.item} ${select ? style.itemSelecionado : ''} ${complet ? style.itemCompletado : ''}`}
     onClick={()=> !complet && selectTask( {task, time, select, complet, id} )}>
      <h3>{task}</h3>
      <span>{time}</span>
      {complet && <span className={style.concluido} aria-label="Completed Task"></span>}
    </li>
  );
}

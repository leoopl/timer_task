import { ITask } from "../../types/ITask";
import Item from "./item";
import style from "./list.module.scss";

interface Props {
  taskList: ITask[],
  selectTask: (currentTask : ITask) => void,
}

export default function List({taskList, selectTask}: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2> Daily Study List</h2>
      <ul>
        {taskList.map(item => (
          <Item selectTask={selectTask}  key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

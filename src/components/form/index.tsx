import React, {useState} from "react";
import { ITask } from "../../types/ITask";
import Button from "../button";
import style from "./form.module.scss";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>> 
}

export default function Form({setTaskList} : Props) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');

    function addTask(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      setTaskList(oldTask => [...oldTask, {task, time, select: false, complet: false, id: uuidv4()}]);
      setTask('');
      setTime('00:00');
    }
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={e=>setTask(e.target.value)}
          placeholder="What do u want study"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={e=>setTime(e.target.value)}
          id="time"
          min="00:00:00"
          //FIXME: PODER AUMENTAR A QUANTIDADE DE HORAS, PRECISO ARRUMAR O TEMPLATE DO RELOGIO
          max="01:39:59"
          required
        />
      </div>
      <Button type="submit">
        Add
      </Button>
    </form>
  );
}

import React, { useState } from "react";
import Form from "../components/form";
import List from "../components/List";
import style from "./app.module.scss";
import Stopwatch from "../components/stopwatch";
import { ITask } from "../types/ITask";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [select, setSelect] = useState<ITask>();

  function selectTask(currentTask:ITask) {
    setSelect(currentTask);
    setTaskList(oldTask => oldTask.map(task => ({...task, select: task.id === currentTask.id ? true : false})));
  }

  function finishTask() {
    if (select) {
      setSelect(undefined)
      setTaskList(oldTask => oldTask.map(task => {
        if (task.id === select.id) {
          return {
            ...task, select: false, complet: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTaskList={setTaskList}/>
      <List taskList={taskList} selectTask={selectTask} />
      <Stopwatch select={select} finishTask = {finishTask}/>
    </div>
  );
}

export default App;

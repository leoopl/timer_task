import { useEffect, useState } from "react";
import timeToSeconds from "../../common/util/time";
import { ITask } from "../../types/ITask";
import Button from "../button";
import style from "./stopwatch.module.scss";
import Watch from "./watch";

interface Props{
  select : ITask | undefined,
  finishTask: () => void;

}

export default function Stopwatch( {select, finishTask} : Props) {
  const [counter, setCount] = useState<number>();

  function regres(timeRegres : number = 0){
    setTimeout(() => {
      if (timeRegres > 0) {
        setCount(timeRegres - 1);
        return regres(timeRegres - 1);
      }
      finishTask();
    }, 1000)
  }

  useEffect(() => {
    if (select?.time) {
      setCount(timeToSeconds(select.time));
    }
  }, [select]);

  return (
    <div className={style.cronometro}>
      <p className={style.title}>Select ur task and start the counter</p>
      <div className={style.relogioWrapper}>
        <Watch counter={counter} />
      </div>
      <Button onClick={() => regres(counter)}>Start</Button>
    </div>
    );
}

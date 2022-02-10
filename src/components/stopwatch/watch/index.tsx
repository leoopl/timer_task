import style from "./watch.module.scss";

interface Props{
  counter : number | undefined;
}

export default function Watch({counter = 0}: Props) {
  const min = Math.floor(counter / 60);
  const sec = counter % 60;
  const [minDec, minUni] = String(min).padStart(2, '0');
  const [secDec, secUni] = String(sec).padStart(2, '0');
  return (
    <>
      <span className={style.relogioNumero}>{minDec}</span>
      <span className={style.relogioNumero}>{minUni}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secDec}</span>
      <span className={style.relogioNumero}>{secUni}</span>
    </>
  );
}

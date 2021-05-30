import styles from './Main.module.css'

export const Main = (props) =>{
  return (
    <div className={styles.grid}>
      <button onClick={props.CountUp}>カウントアップ</button>
      <button onClick={props.CountDown}>カウントダウン</button>
      <div>
        {props.count}
      </div>
     </div>
  );
}
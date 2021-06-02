import styles from './Main.module.css'

export const Main = (props) =>{
  return (
    // <div className={styles.grid}>
    <div>
      <button onClick={props.CountUp}>カウントアップ</button>
      <button onClick={props.CountDown}>カウントダウン</button>
      <div>
        {props.count}
      </div>
      <textarea rows={1} onChange={props.onChangeText}>{props.text}</textarea>
      
     </div>
  );
}
import styles from './Main.module.css'

import {useState} from 'react'

export const Main = (props) =>{

  // const [list, setList] = useState([]);
  // テキストリスト形式で追加
  // const handleText = () =>{
    
  //   const newText:string[] = [...list, props.text];
  //   setList(newText);
  //   alert(list);
  // }

  return (
    // <div className={styles.grid}>
    <div>
      <button onClick={props.CountUp}>カウントアップ</button>
      <button onClick={props.CountDown}>カウントダウン</button>
      <div>
        {props.count}
      </div>
      <textarea rows={1} onChange={props.onChangeText}>{props.text}</textarea>
      <button onClick={props.handleText}>追加</button>
 
      {/* {props.list.map((text) => {
          <li>{text}</li>
      })}   */}
      
     </div>
  );
}
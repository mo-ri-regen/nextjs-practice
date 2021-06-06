import styles from "./Main.module.css";

import { useState } from "react";

import Button from "@material-ui/core/Button";

export const Main = (props) => {
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
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.CountUp}
      >
        カウントアップ
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.CountDown}
      >
        カウントダウン
      </Button>
      <div>{props.count}</div>
      <input
        type="text"
        value={props.text}
        onChange={props.onChangeText}
      ></input>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.handleText}
      >
        追加
      </Button>
      {props.list.map((text) => {
        return (
          <>
            <li>{text}</li>
          </>
        );
      })}
      {/* {props.list.map((text) => {
          <li>{text}</li>
      })}   */}
    </div>
  );
};

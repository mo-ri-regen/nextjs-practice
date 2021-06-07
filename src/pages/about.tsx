import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

import { useState } from "react";

export default function About() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleCountUp = () => {
    setCount(count + 1);
  };
  const handleCountDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  // テキストリスト形式で追加
  const handleText = () => {
    const newText: string[] = [...list, text];
    setList(newText);
  };

  return (
    <div>
      <main>
        <Header page={"about"} />
        <Main
          count={count}
          CountUp={handleCountUp}
          CountDown={handleCountDown}
          text={text}
          onChangeText={onChangeText}
          list={list}
          handleText={handleText}
        />
      </main>
      <Footer />
    </div>
  );
}

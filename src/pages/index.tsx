import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { NextSeo } from "next-seo";
import { useState, useEffect, useCallback } from "react";

import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import React from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const handleCountUp = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleCountDown = useCallback(() => {
    setCount((prevCount) => {
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  }, []);

  return { count, handleCountUp, handleCountDown };
};

const useText = () => {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  // テキストリスト形式で追加
  const handleText = () => {
    const newText: string[] = [...list, text];
    setList(newText);
    setText("");
  };

  return { text, list, onChangeText, handleText };
};

const useBackGroundColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "aqua";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};

export default function Home() {
  const { count, handleCountUp, handleCountDown } = useCounter();
  const { text, list, onChangeText, handleText } = useText();
  useBackGroundColor();

  return (
    <div className={styles.container}>
      <NextSeo title="nextjs-practice" description="nextjs練習"></NextSeo>

      <Header page={"index"} />
      <main className={styles.main}>
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

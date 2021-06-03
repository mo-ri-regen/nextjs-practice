import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useState,useEffect} from 'react'

import {Header} from '../components/Header'
import {Main} from '../components/Main'
import {Footer} from '../components/Footer'
import React from 'react'

export default function Home() {

  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleCountUp = () =>{
    setCount(count+1);
  }
  const handleCountDown = () =>{
    if(count > 0){
      setCount(count-1);
    }
  }
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  // テキストリスト形式で追加
  const handleText = () =>{
    const newText:string[] = [...list, text];
    setList(newText);
  }
  useEffect(() => {
    document.body.style.backgroundColor='aqua'
    return () => {
      document.body.style.backgroundColor=''
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header page={"index"}/>
      <main className={styles.main}>
        
        <Main count={count} CountUp={handleCountUp} CountDown={handleCountDown} text={text} onChangeText={onChangeText} list={list} handleText={handleText}/>
        {list.map((text) => {
          return(
            <>     
             <li>{text}</li>
            </>
          );
        })}     
      </main>

      <Footer />
    </div>
  )
}

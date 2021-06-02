import {Header} from '../components/Header'
import {Main} from '../components/Main'
import {Footer} from '../components/Footer'

import {useState} from 'react'

export default function About() {

  const [count, setCount] = useState<number>(0);

  const handleCountUp = () =>{
    setCount(count+1);
  }
  const handleCountDown = () =>{
    if(count > 0){
      setCount(count-1);
    }
  }

  return(
    <div>
      <main>
        <Header page={"about"}/>
        <Main count={count} CountUp={handleCountUp} CountDown={handleCountDown}/>
      </main>
      <Footer />
    </div>
    
  );
}
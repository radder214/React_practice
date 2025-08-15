import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// chapter 5. Effects
function App() {
  // state
  const [count, setCount] = useState(0);
  const onClick = () => setCount(current => current + 1);
  // 매번 실행되는 코드
  console.log("I run all the time");
  // 딱 한 번만 실행하고 싶은 코드
  useEffect(() => {
    console.log("I run only once");
  }, []); 

  return (
    <div>
      <h1>count</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;

// chapter 4. CRA
// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"continue"}/>
//     </div>
//   );
// }
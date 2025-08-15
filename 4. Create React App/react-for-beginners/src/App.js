import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

// chapter 4. CRA
// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"continue"}/>
//     </div>
//   );
// }

// chapter 5. Effects
function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(current => current + 1);
  console.log("render");
  return (
    <div>
      <h1>count</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
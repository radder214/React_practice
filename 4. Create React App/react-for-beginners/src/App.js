import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect, memo } from "react";

// chapter 5. Effects - cleanUp
function Hello() {
  useEffect(() => {
    console.log("Created");
    // 컴포넌트가 destroy 될 때마다 특정 함수를 실행하고 싶으면 function return
    // [deps] 변경 시에도 실행된다.
    return () => console.log("Destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(current => !current);
  return (
    <div>
      {/* JSX 내부에서는 주석을 이렇게 달면 된다.  */}
      {/* JSX 내부에서 Javascript 코드는 {중괄호}를 열고 작성  */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  )
}

export default App;

// chapter 5. Effects - useEffect & Deps
/**
function App() {
  // state
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount(current => current + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 처음 실행(렌더)시에 딱 한 번만 실행하고 싶은 코드
  useEffect(() => {
    console.log("I run only once");
  }, []);
  
  // count state 값이 변경될 때만 아래 함수를 실행하고 싶다.
  useEffect(() => {
    // 해당 컴포넌트가 맨 처음 렌더링 될 때 함수가 실행되는 것 방지
    // by 아래 조건문이 없으면 불필요한 함수를 실행하게 되므로
    if(count > 0) {
      console.log("I run when 'count' changes");
    }
  }, [count]);

  // keyword state 값이 변경될 때만 아래 함수를 실행하고 싶다.
  useEffect(() => {
    // 해당 컴포넌트가 맨 처음 렌더링 될 때 함수가 실행되는 것 방지
    // by 아래 조건문이 없으면 불필요한 검색 API를 실행하게 되므로
    if(keyword !== "") {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);

  // 복수의 state를 넣을수도 있음
  useEffect(() => {
    if(count > 0 || keyword !== "") {
        // 로그 찍히는게 너무 많아서 주석 처리함
        // console.log("I run when 'count' or 'keyword' changes");
      }
  }, [count, keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h1>{count}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}
*/

// chapter 4. CRA
/**
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"continue"}/>
    </div>
  );
}
*/
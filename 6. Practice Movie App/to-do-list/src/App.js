import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    /**
     * <form>
     *  <button>Add To Do</button>
     * </form>
     * 위와 같은 형태로만 있어도 브라우저는 <form> 안에 있는 <button>을 기본적으로 type="submit" 버튼으로 해석
     * 따라서 <button>을 눌렀을 때의 submit 이벤트를 방지하기 위해 event.preventDefault(); 코드가 있는 것이다.
     * 
     * cf) 
     * <form>
     *  <button>Add To Do1</button>
     *  <button>Add To Do2</button>
     * </form>
     * 이렇게 <button>이 2개 이상 있어도 모든 버튼이 type="submimt" 으로 취급된다.
     */
    event.preventDefault(); // form 태그 안에 있는 button 
    if(toDo === "") {
      return;
    }
    // 평소처럼 arrow function을 써도되지만 일반 함수 선언문을 써보고 싶어서 아래와 같이 작성
    // toDos.push() 같은건 쓰면 안 된다. === React에서 state를 직접 수정하는 일은 없다.
    setToDos(function(currentArray) {
      return [toDo, ...currentArray]; // {중괄호}를 썼기 때문에 return 문은 필수 작성
    });
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
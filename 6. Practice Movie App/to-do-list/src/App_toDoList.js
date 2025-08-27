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
      <hr/>
      <ul>
        {
          toDos.map((item, index) => {
            // Q. 이미 바깥에 {중괄호}로 "여기는 JS 영역"이라는 것을 표현했는데 왜 그냥 item 이 아니라 {item}이라고 작성해야 하는 걸까?
            // A.
            // return <li>...</li> 문법을 사용한 순간 이 부분도 JSX 영역이 된다.
            // 따라서 item 이라는 '변수'값을 화면에 뿌려줘야 하기 때문에 {중괄호}로 감싸야한다.
            return <li key={index}>{item}</li>
            /**
             * 콘솔창 메시지 : Each child in a list should have a unique "key" prop.
             * 
             * <li> 태그에는 원래 key 속성이 없으며 React 만을 위한 내부 식별자
             * HTML DOM에도 남지 않는다. = React 내부에서만 key 속성이 쓰인다.
             * 
             * key prop?
             * React가 리스트를 렌더링할 때 Virtual DOM을 비교(diffing)해야 하는데, 그때 각 항목을 고유하게 식별할 수 있어야 한다.
             * 고유값이 없으면 React는 "리스트 전체를 다시 그려야 하나?" 고민하면서 불필요한 재렌더링이 발생할 수 있다.
             * 이를 위해 React는 key라는 특별한 prop을 도입했다.
             */
          })
        }
      </ul>
    </div>
  );
}

export default App;
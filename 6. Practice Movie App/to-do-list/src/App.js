import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  /**
   * <Router> 컴포넌트
   * - 가장 먼저 렌더링
   * - <Router> 안에 들어가는 것 = 사용자에게 보여주고 싶은 것
   * 
   * <Switch> 컴포넌트
   * - <Route>(=URL)를 찾는 역할, <Route>를 찾으면 컴포넌트를 렌더링한다.
   * - 한 번에 하나의 <Route>만 렌더링 해준다.
   * - 반대로 말하면 React Router는 두 개의 <Route>를 한 번에 렌더링할 수 있다.
   * 
   * <Link> 컴포넌트
   * - 브라우저 새로고침 없이 사용자를 다른 페이지로 이동시켜주는 컴포넌트
   * - anchor 태그의 href를 사용하면 브라우저 자체가 새로고침 된다.
   */

  return (
    <Router>
      <Switch>
        <Route path="/hello">
          {/* 이렇게 바로 보여줄수도 있다. */}
          <h1>hello</h1>
        </Route>
        <Route path="/movie">
          <Detail/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App; 
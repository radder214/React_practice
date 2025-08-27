import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [coins, setCoins] = useState([]);
  // App 컴포넌트가 맨 처음 렌더링 될 때만 API 정보를 가져온다.
  useEffect(() => {
    // 전체 데이터 가져오기
    // fetch("https://api.coinpaprika.com/v1/tickers")
    
    fetch(`https://api.coinpaprika.com/v1/tickers?limit=${limit}`)
      .then(response => {
        console.log(response);
        // Response 객체를 JSON으로 파싱
        return response.json(); // 해당 작업도 비동기로 수행
      })
      .then(json => {
        console.log(json); // 실제 데이터 (배열 or 객체)
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins {coins.length === 0 ? null : `(${coins.length})`}</h1>
      {
        loading
        ? (<strong>Loading...</strong>)
        : (
            <ul>
              {/* <ul>...</ul> JSX 영역 안에서 JS를 쓰는 것이므로 {중괄호}로 감싸야한다.(아래 map 부분) */}
              {
                coins.map((item, index) => {
                  // <li>...</li> JSX 영역에서 JS를 쓰는 것이므로 {중괄호}로 감싸야한다.
                  return <li id={item.id} key={item.id}>{item.name} ({item.symbol}) : {item.quotes.USD.price} USD</li>
                })
              }
            </ul>
          )
      }
    </div>
  );
}

export default App;
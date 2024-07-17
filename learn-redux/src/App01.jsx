import { useSelector, useDispatch } from "react-redux";
function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button>-</button>
      <button
        onClick={() => dispatch({ type: "counter/increment", payload: 5 })}
      >
        +
      </button>
    </div>
  );
}

export default App;

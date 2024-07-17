import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../redux-toolkit/slice/counterSlice.js";
const { increment, decrement } = counterSlice.actions;
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
//ĐANG XEM ĐẾN  29p video buoi 52

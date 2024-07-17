import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/middlewares/fetchTodos";
function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  useEffect(() => {
    dispatch(fetchTodos()); //dispatch lên middleware
  }, []);
  return (
    <div>
      {todoList.map((todo) => (
        <h4 key={todo.id}>{todo.title}</h4>
      ))}
    </div>
  );
}

export default App;

//Tạo thunk function
export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
    dispatch({
      type: "todo/setTodoList",
      payload: data,
    });
  };
};

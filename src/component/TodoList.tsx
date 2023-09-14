import React, { useState, useEffect } from "react";
import {
  useGetTodosQuery,
  useDeleteTodosMutation,
  useAddTodosMutation,
} from "../api/todoSlice";

const TodoList = () => {
  const { data, error, isLoading, refetch } = useGetTodosQuery("");
  const [newData, setNewData] = useState("");
  const [todos, setTodos] = useState([]);

  const [deleteTodo, { isLoading: delLoading, error: delError }] =
    useDeleteTodosMutation();
  const [addTodo] =useAddTodosMutation();

  useEffect(() => {
    if (Array.isArray(data)) {
      setTodos(data);
    }
  }, [data]);

  function handleDelete(todo) {
    deleteTodo(todo.id);
  }

  function handleADD() {
    addTodo({title: newData });
    setNewData("");
  }

  return (
    <>
    <h3>TO DO APP</h3>

      {error ? (
        <>ERROR</>
      ) : isLoading ? (
        <>Please wait</>
      ) : todos ? (
        <div className="bordered">
          <div
            className="inputs"
            style={{
              display: "flex",
              width: "450px",
              height: "40px",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              value={newData}
              onChange={(e) => setNewData(e.target.value)}
              style={{ width: "350px", height: "30px", margin:"3px" }}
            />
            <button onClick={handleADD}>ADD</button>
          </div>

          <ol style={{padding:0 , width: "auto"}}>
            {todos.map((todo) => (
              <>
                <hr />
                <li
                  key={todo.id}
                  style={{ height:"40px", display: "flex", justifyContent: "space-between" }}
                >
                  <p>{todo.title}</p>
                  <button style={{height:"40px",backgroundColor:"red"}} onClick={() => handleDelete(todo)}>Delete</button>
                </li>
              </>
            ))}
          </ol>
        </div>
      ) : null}
    </>
  );
};

export default TodoList;

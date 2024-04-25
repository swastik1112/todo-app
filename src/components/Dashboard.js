import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions/todoActions";

function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.completed ? "Completed" : "Pending"}</p>
            {/* Other todo details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

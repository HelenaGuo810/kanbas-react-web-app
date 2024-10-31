import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({
    todo,
  }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item">
        <button onClick={() => dispatch(deleteTodo(todo.id))}
        className="btn btn-danger float-end"
                id="wd-delete-todo-click"> Delete </button>
        <button onClick={() => setTodo(todo)}
        className="btn btn-primary float-end mx-2"
                id="wd-set-todo-click"> Edit </button>
        {todo.title}    </li>);}
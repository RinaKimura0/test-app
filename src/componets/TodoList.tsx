import { Task } from '@/types';
import Todo from './Todo';
import React,{ useEffect } from 'react';
import style from "@/styles/TodoList.module.scss";

interface TodoListProps {
  todos : Task[];
  reloadTodo : () => Promise<void>;
}

const TodoList = ({ todos, reloadTodo }: TodoListProps) => {
  return (
    <ul className={style.todo_list}>
      {todos.map((todo) => (
       <Todo key ={todo.id} todo = {todo} reloadTodo={reloadTodo}/>
      ))}
    </ul>
  );
};

export default TodoList

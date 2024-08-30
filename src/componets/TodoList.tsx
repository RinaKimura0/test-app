import { Task } from '@/types';
import Todo from './Todo';
import React,{ useEffect } from 'react';
import style from "@/styles/TodoList.module.scss";

interface TodoListProps {
  todos : Task[];
}

const TodoList = ({ todos }: TodoListProps ) => {
  return (
    <ul className={style.todo_list}>
      {todos.map((todo) => (
       <Todo key ={todo.id} todo = {todo} />
      ))};
      </ul>
  );
};

export default TodoList

/* OK */
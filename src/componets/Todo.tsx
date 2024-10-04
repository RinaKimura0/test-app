'use client' // useStateを使うのでこれを宣言する

import { deleteTodo, editTodo } from '@/api';
import { Task } from '@/types';
import React, { useEffect, useState, useRef } from 'react';
import style from "@/styles/TodoList.module.scss";


interface TodoProps {    //types.tsを定義している
    todo:Task; 
    reloadTodo : () => Promise<void>;
} 

const Todo = ({todo, reloadTodo}:TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [ isEditing,setIsEditing ] = useState(false);
    const [ editedTaskTitle,setEditedTaskTitle] = useState<string>(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    },[isEditing]);

    const handleEdit = async () => {
        setIsEditing(true);
    };
    const handSave = async () => {
        const update = await editTodo(todo.id,editedTaskTitle); //打ち込んだ状態で編集を更新したい→api.tsのeditTodoを呼んでいる。引数はそれ。
        todo.text = update.text;
        setIsEditing(false);
    };
    const handleDlete = async () => {
        await deleteTodo(todo.id);
        await reloadTodo();
    };

  return (
    <li
         key={todo.id}
         className={style.todo_item}>
            {isEditing ? (
                <input
                ref={ref}
                type='text'
                className={style.editing}
                value = { editedTaskTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditedTaskTitle(e.target.value)
                }/>
            ):(
                <span>{todo.text}</span>
            )}
          
           <div>
                { isEditing ?(
                    <button className={style.save_btn} onClick={handSave}>
                        Save
                    </button>
                ):(
                    <button className={style.edit_btn} onClick={handleEdit}>
                        Edit
                  </button>
                )}
                <button className={style.delet_btn} onClick={handleDlete}>
                    Dlete
                </button>
           </div>
    </li>
  )
}

export default Todo
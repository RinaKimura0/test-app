'use client' /* useStateを使うのでこれを宣言する　*/

import {Task} from '@/types';
import React, { useState } from 'react';
import style from "@/styles/TodoList.module.scss";


interface TodoProps {    /*types.tsを定義している*/
    todo:Task; 
} 

const Todo = ({todo}:TodoProps) => {
    const [ isEditing,setIsEditing ] = useState(false);
    const handleEdit = async () => {
        setIsEditing(true);
    };

  return (
    <li 
         key={todo.id}
         className={style.todo_item}>
            {isEditing ? (
                <input
                type='text'
                className={style.editing} />
            ):(
                <span>{todo.text}</span>
            )}
          
           <div>
            <button className={style.edit_btn} onClick={handleEdit}>
              Edit
            </button>
            <button className={style.delet_btn}>
              Dlete
            </button>
           </div>
     </li>
  )
}

export default Todo
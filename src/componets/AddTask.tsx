'use client';
import { addTodo } from '@/api';
import React, {ChangeEvent,FormEvent,useState} from 'react';
import style from "@/styles/AddTask.module.scss";
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@/types';

/* uuidインストールできたけど、同時に脆弱性も検出された。
npm audit でどのパッケージに脆弱性があるか確認して、npm auditで更新とかするらしいんだけど、やっていいのかな？*/

const AddTask = ({ addPageTodo }: { addPageTodo: () => void }) => {
  const [ taskTitle, setTaskTitle ] = useState('');
  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault();
    await addTodo ({id:uuidv4(),text:taskTitle});
    addPageTodo();
    setTaskTitle('')
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
     <input 
        type='text'
        className={style.input_text}
        onChange = {(e:ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        value={taskTitle}
      />
      <button className={style.btn_submit}>
          AddTask
      </button>
     </form>
  );
};

export default AddTask

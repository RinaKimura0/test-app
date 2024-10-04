import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddTask from '@/componets/AddTask';
import TodoList from '@/componets/TodoList';
import style from "@/styles/page.module.scss";
import { Task } from '@/types';
import {getAllTodos} from '@/api';

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Task[]>([]); //api.tsのPromiseを使うときは、ここで受けれるようにする。(エラー出ちゃっての解決策)

    //変更
    useEffect(() => {
        const fetchTodos = async () => {
            setTodos(await getAllTodos());
        };

        fetchTodos();
    }, []);


    const handleRelodeTodo = async () => {
      try {
        const newTodos = await getAllTodos();
        setTodos(newTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    
    return (
        <main className={style.container}>
            <h1 className={style.title}>Todo App</h1>
            <div className={style.boxcontainer}>
                <div className={style.innerbox}>
                    <AddTask addPageTodo={handleRelodeTodo}/>
                    <TodoList todos={todos} reloadTodo={handleRelodeTodo}/>
                </div>
            </div>
        </main>
    );
};

export default Home;
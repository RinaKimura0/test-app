import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddTask from '@/componets/AddTask';
import TodoList from '@/componets/TodoList';
import style from "@/styles/page.module.scss";
import { Task } from '@/types';
import {getAllTodos} from '@/api';

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Task[]>([]); /*api.tsのPromiseを使うときは、ここで受けれるようにする。(エラー出ちゃっての解決策)*/

    useEffect(() => {
        const fetchTodos = async () => {
            setTodos(await getAllTodos());
        };

        fetchTodos();
    }, []);

    return (
        <main className={style.container}>
            <h1 className={style.title}>Todo App</h1>
            <div className={style.boxcontainer}>
                <div className={style.innerbox}>
                    <AddTask />
                    <TodoList todos={todos} />
                </div>
            </div>
        </main>
    );
};

export default Home;
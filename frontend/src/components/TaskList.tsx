import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../queries/todoQuery';
import React, { useState } from 'react';

const TaskList = () => {
    const { data, loading, error } = useQuery(GET_TODOS);
    const [todolist, setTodoList] = useState([]);
    
    return (
        <>
            <div className='mt-4'>
                <ul className='flex flex-col gap-5'>
                    {
                        data && data.todos.map((data, index) => {
                            return (
                                <li className='flex justify-start w-full items-center gap-3' key={index}>
                                    <div className='w-[90%] flex gap-4 items-center'>
                                        <input type="checkbox" className='w-4 h-4' id={`myInput${index}`} />
                                        <label className={`w-[90%] text-lg font-bold ${data.completed ? "line-through" : ""}`} htmlFor={`myInput${index}`}>{data.title}</label>
                                    </div>
                                    <button className='bg-blue-500 px-4 py-2 flex justify-end'>&#9876;</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default TaskList

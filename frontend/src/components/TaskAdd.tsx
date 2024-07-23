import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_TODO } from '../queries/todoQuery';

const TaskAdd = () => {
    const [todotitle, setTodoTitle] = useState<String>();
    const [createTodo, {data, error, loading}] = useMutation(CREATE_TODO);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        createTodo({variables: {title: todotitle}});
        if(error) alert(error.message);
        setTodoTitle("")
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex justify-between w-full'>
                    <input type="text" placeholder='Please Enter Your Task!' className='w-[90%] px-4' onChange={(e) => setTodoTitle(e.target.value)}/>
                    <button className='bg-blue-500 px-4 py-2 text-white' type='submit'>Add</button>
                </div>
            </form>
        </>
    )
}

export default TaskAdd

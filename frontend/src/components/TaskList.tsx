import React from 'react'

const TaskList = () => {

    const TaskListData = [
        {
            title: "This is my first title",
            completed: false
        },
        {
            title: "This is my first title",
            completed: true
        },
        {
            title: "This is my first title",
            completed: false
        },
        {
            title: "This is my first title",
            completed: false
        },
    ]

  return (
    <>
      <div className='mt-4'>
        <ul className='flex flex-col gap-5'>
            {
                TaskListData.map((data, index) => {
                    return(
                        <>
                            <li className='flex justify-start w-full items-center gap-3'>
                                <div className='w-[90%] flex gap-4 items-center'>
                                    <input type="checkbox" className='w-4 h-4' id={`myInput${index}`}/>
                                    <label className={`w-[90%] text-lg font-bold ${data.completed ? "line-through" : ""}`} htmlFor={`myInput${index}`}>{data.title}</label>
                                </div>
                                <button className='bg-blue-500 px-4 py-2 flex justify-end'>&#9876;</button>
                            </li>
                        </>
                    )
                })
            }
        </ul>
      </div>
    </>
  )
}

export default TaskList

import React from 'react'

const TaskAdd = () => {
  return (
    <>
      <form action="">
          <div className='flex justify-between w-full'>
            <input type="text" placeholder='Please Enter Your Task!' className='w-[90%] px-4'/>
            <button className='bg-blue-500 px-4 py-2 text-white' type='submit'>Add</button>
          </div>
        </form>
    </>
  )
}

export default TaskAdd

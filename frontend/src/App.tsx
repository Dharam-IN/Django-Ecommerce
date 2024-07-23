import React from 'react'
import TaskAdd from './components/TaskAdd'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='md:w-[600px] w-full px-3 mx-auto bg-blue-100 p-5'>
          <TaskAdd/>
          <TaskList/>
        </div>
      </div>
    </>
  )
}

export default App

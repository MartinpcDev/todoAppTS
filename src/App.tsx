// import { useState } from 'react'
import { TaskForm } from './components/TaskForm'

export const App = (): JSX.Element => {
  // const [task, setTask] = useState([])
  return (
    <div className="bg-slate-800 grid-rows-[150px] auto-rows-auto w-full h-screen font-roboto flex flex-col items-center pt-4 text-white">
      <TaskForm />
    </div>
  )
}

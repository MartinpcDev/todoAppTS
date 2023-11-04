import { useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { type Task } from './types'

const mockTasks = [
  {
    task: 'Tarea 1',
    status: 'Done',
    tags: ['CSS', 'React']
  },
  {
    task: 'Tarea 2',
    status: 'To Do',
    tags: ['JavaScript', 'HTML']
  },
  {
    task: 'Tarea 3',
    status: 'Doing',
    tags: ['HTML', 'JavaScript']
  }
]

export const App = (): JSX.Element => {
  const [task, setTask] = useState(mockTasks)
  const handleAddTask = ({ task, status, tags }: Task): void => {
    const newTask = {
      task,
      status,
      tags
    }
    setTask(prev => {
      return [...prev, newTask]
    })
  }
  console.log(task)
  return (
    <div className="bg-slate-800 grid-rows-[150px] auto-rows-auto w-full h-screen font-roboto flex flex-col items-center pt-4 text-white">
      <TaskForm handleAddTask={handleAddTask} />
    </div>
  )
}

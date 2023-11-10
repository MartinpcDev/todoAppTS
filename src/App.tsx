import { useState, useEffect } from 'react'
import { TaskForm } from './components/TaskForm'
import { type Task } from './types'
import { TaskColumn } from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem('tasks')
console.log(oldTasks)

export const App = (): JSX.Element => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks ?? '[]'))

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = ({ task, status, tags }: Task): void => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      task,
      status,
      tags
    }
    setTasks((prev: Task[]): Task[] => {
      return [...prev, newTask]
    })
  }

  const handleDelete = (taskIndex: string): void => {
    const newTasks = tasks.filter((task: Task) => task.id !== taskIndex)
    setTasks(newTasks)
  }

  console.log(tasks)
  return (
    <div className="bg-slate-800 grid-rows-[150px] auto-rows-auto w-full h-auto font-roboto text-white sm:h-screen">
      <TaskForm handleAddTask={handleAddTask} />
      <main className='flex flex-col justify-evenly px-5 py-[8%] sm:flex-row '>
        <TaskColumn
          title='To do'
          tasks={tasks}
          icon={todoIcon}
          status='todo'
          handleDelete={handleDelete}
        />
        <TaskColumn
          title='Doing'
          tasks={tasks}
          icon={doingIcon}
          status='doing'
          handleDelete={handleDelete}
        />
        <TaskColumn
          title='Done'
          tasks={tasks}
          icon={doneIcon}
          status='done'
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}

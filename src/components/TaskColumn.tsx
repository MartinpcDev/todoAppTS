import { type ListTasks } from '../types'
import { TaskCard } from './TaskCard'

interface Props {
  title: string
  tasks: ListTasks
  icon: string
  status: string
  handleDelete: (taskIndex: string) => void
}
export const TaskColumn: React.FC<Props> = ({ title, tasks, icon, status, handleDelete }) => {
  return (
    <section className="w-full m-5 sm:w-[33.33%] px-4">
      <h2 className="flex items-center">
        <img className="w-[30px] mr-[5px]" src={icon} alt={title} />
        {title}
      </h2>
      {tasks.map((task) => task.status === status && (
        <TaskCard
          key={task.id}
          title={task.task}
          tags={task.tags}
          index={task.id}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  )
}

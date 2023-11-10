export interface Task {
  id: string
  task: string
  status: string
  tags: string[]
}

export type TaskTag = keyof typeof Pick<Task, 'tags'>

export type ListTasks = Task[]

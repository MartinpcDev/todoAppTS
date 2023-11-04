export interface Task {
  task: string
  status: string
  tags: string[]
}

export type TaskTag = keyof typeof Pick<Task, 'tags'>

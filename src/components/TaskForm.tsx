import React, { useState } from 'react'
import { Tag } from './Tag'
import { type Task } from '../types'

interface Props {
  handleAddTask: ({ task, status, tags }: Task) => void
}

export const TaskForm: React.FC<Props> = ({ handleAddTask }) => {
  const [taskData, setTaskData] = useState<Task>({
    id: '',
    task: '',
    status: 'todo',
    tags: []
  })

  const checkTag = (tag: string): boolean => {
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag: string): void => {
    if (taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return { ...prev, tags: filterTags }
      })
    } else {
      setTaskData(prev => {
        return { ...prev, tags: [...prev.tags, tag] }
      })
    }
  }

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target
    setTaskData(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setTaskData((prev) => { return { ...prev, [name]: value } })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleAddTask(taskData)
    setTaskData({
      id: '',
      task: '',
      status: 'todo',
      tags: []
    })
  }

  return (
    <header className='w-full flex items-center justify-center border-b-[1px] border-solid border-[#dcdcdc] pt-4'>
      <form className='w-[40%] pb-8' onSubmit={handleSubmit}>
        <input
          className='w-full text-[20px] font-400 bg-slate-600 border-[1px] border-solid border-[#f9f9f9] rounded-md p-2 mb-4 placeholder-[#b3aeae]'
          type="text"
          placeholder="Enter your task"
          name="task"
          value={taskData.task}
          onChange={handleChangeInput}
        />
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <div className='flex items-center justify-between flex-wrap gap-6 p-4'>
            <Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')} />
            <Tag tagName='CSS' selectTag={selectTag} selected={checkTag('CSS')} />
            <Tag tagName='JavaScript' selectTag={selectTag} selected={checkTag('JavaScript')} />
            <Tag tagName='React' selectTag={selectTag} selected={checkTag('React')} />
          </div>
          <div className='flex text-center flex-wrap justify-center items-center gap-1'>
            <select
              className='text-[16px] border-[1px] border-solid border-[#f9f9f9] rounded-md w-[120px] h-8 py-0 px-[5px] bg-slate-600'
              name="status"
              value={taskData.status}
              onChange={handleChangeSelect}>
              <option className='text-green-400 font-bold' value="todo">To Do</option>
              <option className='text-yellow-400 font-bold' value="doing">Doing</option>
              <option className='text-red-400 font-bold' value="done">Done</option>
            </select>
            <button className='text-base bg-[#6457f9] text-[#fff] rounded-md h-8 py-1 px-3 ml-3 border-none cursor-pointer text-center hover:opacity-80' type="submit">+Add</button>
          </div>
        </div>
      </form>
    </header>
  )
}

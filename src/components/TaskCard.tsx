import { TagRead } from './TagRead'
import deleteIcon from '../assets/delete.png'

interface Props {
  title: string
  tags: string[]
  handleDelete: (taskIndex: string) => void
  index: string
}

export const TaskCard: React.FC<Props> = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="w-full min-h-[100px] border-solid border-[1px] border-[#dcdcdc] rounded-xl p-4 my-4 mx-0">
      <p className="font-[700] text-[18px] mb-[15px]">{title}</p>
      <div className='flex items-center justify-between'>
        <div>
          {tags.map((tag, index) => (
            <TagRead key={index} tagName={tag} selected />
          ))}
        </div>
        <div className='w-[35px] h-[35px] rounded-[100%] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-500 bg-[#ebebeb]'
          onClick={() => { handleDelete(index) }}>
          <img className='w-[20px] opacity-50 transition-all duration-300 ease-in-out hover:opacity-80' src={deleteIcon} alt="delete" />
        </div>
      </div>
    </article>
  )
}

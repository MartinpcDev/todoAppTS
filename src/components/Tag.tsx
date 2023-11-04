interface Props {
  tagName: string
  selectTag: (tag: string) => void
  checkTag: (tag: string) => boolean
}

type TagStyle = Record<string, { backgroundColor: string }>

export const Tag: React.FC<Props> = ({ tagName, selectTag, checkTag }) => {
  const tagStyle: TagStyle = {
    HTML: { backgroundColor: '#fda821' },
    CSS: { backgroundColor: '#15d4c8' },
    JavaScript: { backgroundColor: '#ffd12c' },
    React: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' }
  }

  return (
    <button className="text-[14px] bg-[#f9f9f9] rounded-md py-[2px] px-[10px] mr-3 cursor-pointer text-slate-900"
      type="button"
      style={checkTag(tagName) ? tagStyle[tagName] : tagStyle.default}
      onClick={() => { selectTag(tagName) }}>
      {tagName}
    </button>
  )
}

export const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: '#fda821' },
    CSS: { backgroundColor: '#15d4c8' },
    JavaScript: { backgroundColor: '#ffd12c' },
    React: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' }
  }

  return (
    <button className="text-[14px] bg-[#f9f9f9] rounded-md py-[2px] px-[10px] mr-3 cursor-pointer text-slate-900"
      type="button"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  )
}

const TagList = ({ tags = [] }: { tags?: string[] }) => (
  <div className="flex gap-2 flex-wrap">
    {tags.map((tag, index) => (
      <p
        key={index}
        className="text-xs sm:text-s bg-sky-500/60 px-4 sm:px-6 py-1 whitespace-nowrap rounded-2xl"
      >
        {tag}
      </p>
    ))}
  </div>
);

export default TagList;

const showFormattedDateTime = (date) => {
  const optionsDate = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formattedDate = new Date(date).toLocaleDateString('id-ID', optionsDate);
  const formattedTime = new Date(date).toLocaleTimeString('id-ID', optionsTime);

  return `${formattedDate} at ${formattedTime}`;
};

const shuffleArray = (array) => array
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const filterMemos = (memos, keyword) => {
  if (!memos) return [];

  const clonedMemos = [...memos];

  const filteredMemos = clonedMemos.filter((memo) => memo.title.toLowerCase().includes(keyword.toLowerCase()));

  return filteredMemos.sort((a, b) => {
    const dateA = new Date(a.updatedAt || a.createdAt);
    const dateB = new Date(b.updatedAt || b.createdAt);
    return dateB - dateA;
  });
};

export { showFormattedDateTime, shuffleArray, filterMemos };

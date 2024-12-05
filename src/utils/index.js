const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
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

export { showFormattedDate, shuffleArray, filterMemos };

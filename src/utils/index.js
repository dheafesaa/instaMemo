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
  if (!keyword) return memos;
  const lowerCaseKeyword = keyword.toLowerCase();

  return memos.filter((memo) => memo.title.toLowerCase().includes(lowerCaseKeyword));
};

export { showFormattedDate, shuffleArray, filterMemos };

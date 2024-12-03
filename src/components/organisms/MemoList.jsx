import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Alert from '../atoms/Alert';
import MemoItem from '../molecules/MemoItem';

function MemoList({ memos }) {
  const rowColors1 = ['#A5FFFF', '#FFF0A1', '#FFA7FB', '#FF7F96'];
  const rowColors2 = ['#FFA7FB', '#FF7F96', '#A5FFFF', '#FFF0A1'];
  const itemsPerRow = 4;

  return (
    <Grid container spacing={3} mt={4} mb={4}>
      {memos?.length === 0 ? (
        <Grid item xs={12}>
          <Alert
            severity="info"
            title="Information"
            body="No memos available. Please add a new memo to get started!"
          />
        </Grid>
      ) : (
        memos?.map((memo, index) => {
          const rowIndex = Math.floor(index / itemsPerRow);
          const colorSequence = rowIndex % 2 === 0 ? rowColors1 : rowColors2;
          const color = colorSequence[index % itemsPerRow];

          return (
            <Grid item xs={12} sm={6} md={3} key={memo.id}>
              <MemoItem
                id={memo.id}
                title={memo.title}
                body={memo.body}
                createdAt={memo.createdAt}
                color={color}
              />
            </Grid>
          );
        })
      )}
    </Grid>
  );
}

MemoList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MemoList;

import React from 'react';
import { Box } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '40px',
          height: '40px',
          '--c1': 'no-repeat linear-gradient(#A5FFFF 0 0)',
          '--c2': 'no-repeat linear-gradient(#FFF0A1 0 0)',
          '--c3': 'no-repeat linear-gradient(#FFA7FB 0 0)',
          '--c4': 'no-repeat linear-gradient(#FF7F96 0 0)',
          background:
            'var(--c1), var(--c2), var(--c3), var(--c4)',
          backgroundSize: '21px 21px',
          animation: 'l5 1.5s infinite cubic-bezier(0.3, 1, 0, 1)',
          '@keyframes l5': {
            '0%': {
              backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
            },
            '33%': {
              backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
              width: '60px',
              height: '60px',
            },
            '66%': {
              backgroundPosition: '100% 0, 100% 100%, 0 100%, 0 0',
              width: '60px',
              height: '60px',
            },
            '100%': {
              backgroundPosition: '100% 0, 100% 100%, 0 100%, 0 0',
            },
          },
        }}
      />
    </Box>
  );
}

export default Loader;

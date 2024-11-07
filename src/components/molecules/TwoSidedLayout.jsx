import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function TwoSidedLayout({
  leftImage, children, title, subtitle,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${leftImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '50vh', md: '100%' },
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {title && (
            <Typography variant="h4" component="h1" align="center">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body1" align="center" sx={{ mt: 1 }}>
              {subtitle}
            </Typography>
          )}
          {children}
        </Box>
      </Box>
    </Box>
  );
}

TwoSidedLayout.propTypes = {
  leftImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TwoSidedLayout;

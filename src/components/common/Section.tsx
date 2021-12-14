import { Box, Divider, Typography } from '@mui/material';
import { FC } from 'react';

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Divider />
      {children}
    </Box>
  );
};

export default Section;

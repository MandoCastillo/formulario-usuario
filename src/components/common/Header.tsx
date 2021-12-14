import { Typography } from '@mui/material';
import { FC } from 'react';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Typography variant="h2" gutterBottom component="h4" mt={6}>
      {title}
    </Typography>
  );
};

export default Header;

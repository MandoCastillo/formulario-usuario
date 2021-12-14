import { Container } from '@mui/material';
import { FC } from 'react';
import Address from '../components/Address';
import Header from '../components/common/Header';

const UserForm: FC = () => {
  return (
    <Container
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header title="Perfil de usuario" />
      <Address />
    </Container>
  );
};

export default UserForm;

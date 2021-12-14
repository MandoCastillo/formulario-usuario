import { Button, Container } from '@mui/material';
import { FC, useContext } from 'react';
import Address from '../components/Address';
import Header from '../components/common/Header';
import { FormContext } from '../context/FormContext';

const UserForm: FC = () => {
  const { setIsFormLoading } = useContext(FormContext);
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
      <Button onClick={() => setIsFormLoading(true)}>Guardar</Button>
    </Container>
  );
};

export default UserForm;

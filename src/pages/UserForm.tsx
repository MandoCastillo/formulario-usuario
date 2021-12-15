import { Container } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { FC, useContext } from 'react';
import CompanyData from '../components/form/CompanyData';
import Header from '../components/common/Header';
import FormStepper from '../components/form/FormStepper';
import { FormContext } from '../context/FormContext';
import CompanyAddress from '../components/form/CompanyAddress';
import RepresentativeData from '../components/form/RepresentativeData';

const UserForm: FC = () => {
  const {
    formState: { currentStep },
  } = useContext(FormContext);
  return (
    <Container
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src="https://kredfeed-assets.s3.amazonaws.com/images/logo-black.png"
        alt="logo"
        width={300}
      />
      <Header title="Perfil de usuario" />
      <FormStepper />
      <TabContext value={currentStep.toString()}>
        <TabPanel value="0">
          <CompanyData />
        </TabPanel>
        <TabPanel value="1">
          <CompanyAddress />
        </TabPanel>
        <TabPanel value="2">
          <RepresentativeData />
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default UserForm;

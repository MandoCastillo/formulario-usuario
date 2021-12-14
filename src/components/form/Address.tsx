import { Box, Button, Grid, Stack } from '@mui/material';
import { FC, useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { useForm } from '../../hooks/useForm';
import TextFieldCustom from '../common/TextFieldCustom';

interface CompanyDataProps {}

const Address: FC<CompanyDataProps> = ({}) => {
  const {
    onChange,
    isEmpty,
    setError,
    resetErrors,
    isValidEmail,
    isValidPhone,
    hasError,
    errors,
    formData,
  } = useForm({
    companyName: '',
    tradeName: '',
    nationality: '',
    dateIncorporation: '',
    RFC: '',
    taxRegime: '',
    industry: '',
    proofAddress: '',
    phoneNumber: '',
    email: '',
  });
  const { prevFormStep, nextFormStep } = useContext(FormContext);

  const validateData = () => {
    resetErrors();
    // reset();
  };
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Box
        sx={{
          width: 1,
          flexGrow: 1,
          mb: 4,
        }}
      >
        <Grid container spacing={2}>
          <TextFieldCustom
            formData={formData}
            errors={errors}
            name="companyName"
            label="Razón social"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Nombre comercial"
            name="tradeName"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Nacionalidad"
            name="nationality"
            onChange={onChange}
            hasError={hasError}
          />

          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Fecha de constitución"
            name="dateIncorporation"
            type="date"
            isShrink
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="RFC"
            name="RFC"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Régimen Fiscal"
            name="taxRegime"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Industria"
            name="industry"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            type="file"
            label="Comprobante de domicilio"
            name="proofAddress"
            isShrink
            onChange={onChange}
            hasError={hasError}
          />

          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Número telefónico"
            type="tel"
            name="phoneNumber"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Dirección de correo electrónico"
            name="email"
            type="email"
            onChange={onChange}
            hasError={hasError}
          />
        </Grid>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={prevFormStep} color="primary" size="large">
          Anterior
        </Button>
        <Button
          onClick={validateData}
          style={{ color: 'white' }}
          variant="contained"
          color="primary"
          size="large"
        >
          Siguiente
        </Button>
      </Stack>
    </Box>
  );
};

export default Address;

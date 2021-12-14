import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import { FormContext } from '../context/FormContext';
import { useForm } from '../hooks/useForm';
import TextFieldCustom from './common/TextFieldCustom';

const Address: FC = () => {
  const {
    setError: setFormError,
    reset,
    formState: { isLoading },
  } = useContext(FormContext);

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

  useEffect(() => {
    if (isLoading) {
      validateData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const validateData = () => {
    resetErrors();
    reset();
    if (isEmpty(formData.companyName)) {
      setError('companyName', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.tradeName)) {
      setError('tradeName', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.nationality)) {
      setError('nationality', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.dateIncorporation)) {
      setError('dateIncorporation', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.RFC)) {
      setError('RFC', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.taxRegime)) {
      setError('taxRegime', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.industry)) {
      setError('industry', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.proofAddress)) {
      setError('proofAddress', 'Este campo es necesario');
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.phoneNumber) || !isValidPhone(formData.phoneNumber)) {
      setError(
        'phoneNumber',
        'Este campo es necesario o no cumple los requisitos',
      );
      setFormError('isAddressDataRight', true);
    }
    if (isEmpty(formData.email) || !isValidEmail(formData.email)) {
      setError('email', 'Este campo es necesario o no cumple los requisitos');
      setFormError('isAddressDataRight', true);
    }
  };

  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Typography component="h1" variant="h5">
        Datos de la empresa
      </Typography>
      <Divider />
      <Box
        sx={{
          width: 1,
          flexGrow: 1,
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
    </Box>
  );
};

export default Address;

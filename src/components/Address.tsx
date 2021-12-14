import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useForm } from '../hooks/useForm';
import TextFieldCustom from './common/TextFieldCustom';

const Address: FC = () => {
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

  const validateData = () => {
    resetErrors();
    if (isEmpty(formData.companyName)) {
      setError('companyName', 'Este campo es necesario');
    }
    if (isEmpty(formData.tradeName)) {
      setError('tradeName', 'Este campo es necesario');
    }
    if (isEmpty(formData.nationality)) {
      setError('nationality', 'Este campo es necesario');
    }
    if (isEmpty(formData.dateIncorporation)) {
      setError('dateIncorporation', 'Este campo es necesario');
    }
    if (isEmpty(formData.RFC)) {
      setError('RFC', 'Este campo es necesario');
    }
    if (isEmpty(formData.taxRegime)) {
      setError('taxRegime', 'Este campo es necesario');
    }
    if (isEmpty(formData.industry)) {
      setError('industry', 'Este campo es necesario');
    }
    if (isEmpty(formData.proofAddress)) {
      setError('proofAddress', 'Este campo es necesario');
    }
    if (isEmpty(formData.phoneNumber) || !isValidPhone(formData.phoneNumber)) {
      setError(
        'phoneNumber',
        'Este campo es necesario o no cumple los requisitos',
      );
    }
    if (isEmpty(formData.email) || !isValidEmail(formData.email)) {
      setError('email', 'Este campo es necesario o no cumple los requisitos');
    }
  };

  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Typography component="h1" variant="h5">
        Company data
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
          <Grid item xs={6}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              required
              fullWidth
              type="file"
              label="Comprobante de domicilio"
              name="proofAddress"
              value={formData.proofAddress}
              onChange={onChange}
              helperText={errors.proofAddress}
              error={hasError('proofAddress')}
            />
          </Grid>

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

          <Grid item xs={12}>
            <Button onClick={validateData}>Guardar</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Address;

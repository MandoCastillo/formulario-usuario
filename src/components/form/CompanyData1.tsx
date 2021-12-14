import { Box, Button, Grid, Stack } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import { useForm } from '../../hooks/useForm';
import TextFieldCustom from '../common/TextFieldCustom';

const CompanyData: FC = () => {
  const {
    setError: setFormError,
    reset,
    nextFormStep,
    formState: { isLoading, isCompanyDataRight },
  } = useContext(FormContext);
  // const [state, setstate] = useState(initialState)

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
    if (isCompanyDataRight) {
      nextFormStep();
      setFormError('isCompanyDataRight', false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompanyDataRight]);

  const validateData = () => {
    resetErrors();
    reset();
    if (isEmpty(formData.companyName)) {
      setError('companyName', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.tradeName)) {
      setError('tradeName', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.nationality)) {
      setError('nationality', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.dateIncorporation)) {
      setError('dateIncorporation', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.RFC)) {
      setError('RFC', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.taxRegime)) {
      setError('taxRegime', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.industry)) {
      setError('industry', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.proofAddress)) {
      setError('proofAddress', 'Este campo es necesario');
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.phoneNumber) || !isValidPhone(formData.phoneNumber)) {
      setError(
        'phoneNumber',
        'Este campo es necesario o no cumple los requisitos',
      );
      setFormError('isCompanyDataRight', false);
    }
    if (isEmpty(formData.email) || !isValidEmail(formData.email)) {
      setError('email', 'Este campo es necesario o no cumple los requisitos');
      setFormError('isCompanyDataRight', false);
    }
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
      <Stack direction="row" justifyContent="flex-end">
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

export default CompanyData;

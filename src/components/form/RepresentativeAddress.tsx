import { Box, Button, Grid, Stack } from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import { address } from '../../context/formDataMock';
import { useForm } from '../../hooks/useForm';
import TextFieldCustom from '../common/TextFieldCustom';

const RepresentativeAddress: FC = () => {
  const {
    setError: setFormError,
    setFormRepresentativeAddress,
    prevFormStep,
    nextFormStep,
    reset,
    formState: { representativeAddress, isRepresentativeAddressRight },
  } = useContext(FormContext);

  const [buttonHasClicked, setButtonHasClicked] = useState(false);

  const {
    onChange,
    isEmpty,
    setError,
    resetErrors,
    hasError,
    errors,
    formData,
  } = useForm({ ...representativeAddress }, { ...address });

  useEffect(() => {
    console.log(isRepresentativeAddressRight);

    if (isRepresentativeAddressRight && buttonHasClicked) {
      setButtonHasClicked(false);
      setFormError('isRepresentativeAddressRight', false);
      setFormRepresentativeAddress({ ...formData });
      reset();
      nextFormStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRepresentativeAddressRight, buttonHasClicked]);

  const validateFields = () => {
    const fields = Object.keys(formData) as (keyof typeof formData)[];
    fields.forEach((field) => {
      if (field !== 'innerNumber' && isEmpty(formData[field])) {
        setError(field, 'Este campo es necesario');
        setFormError('isRepresentativeAddressRight', false);
      }
    });
  };

  const validateData = () => {
    setButtonHasClicked(true);
    resetErrors(address);
    reset();
    validateFields();
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
            name="street"
            label="Calle o Avenida"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Número exterior"
            name="outsideNumber"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Número interior"
            name="innerNumber"
            onChange={onChange}
            hasError={hasError}
          />

          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Código Postal "
            name="zipCode"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Colonia o Urbanización"
            name="neighborhood"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Ciudad o Población"
            name="city"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Entidad Federativa o Estado"
            name="state"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="País"
            name="country"
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

export default RepresentativeAddress;

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { FC, useContext, useEffect, useState, ChangeEvent } from 'react';
import { FormContext } from '../../context/FormContext';
import { useForm } from '../../hooks/useForm';
import TextFieldCustom from '../common/TextFieldCustom';
import { representativeData as representativeResetData } from '../../context/formDataMock';

const RepresentativeData: FC = () => {
  const {
    setError: setFormError,
    setFormRepresentativeData,
    prevFormStep,
    nextFormStep,
    reset,
    formState: { isRepresentativeDataRight, representativeData },
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
    isValidEmail,
    isValidPhone,
  } = useForm(
    { ...representativeData, identificationDocument: '' },
    representativeResetData,
  );

  useEffect(() => {
    console.log(isRepresentativeDataRight);

    if (isRepresentativeDataRight && buttonHasClicked) {
      setButtonHasClicked(false);
      setFormError('isRepresentativeDataRight', false);
      setFormRepresentativeData({ ...formData });
      reset();
      nextFormStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRepresentativeDataRight, buttonHasClicked]);

  const validateFields = () => {
    const fields = Object.keys(formData) as (keyof typeof formData)[];
    fields.forEach((field) => {
      switch (field) {
        case 'phoneNumber':
          if (
            isEmpty(formData.phoneNumber) ||
            !isValidPhone(formData.phoneNumber)
          ) {
            setError(
              'phoneNumber',
              'Este campo es necesario o no cumple los requisitos',
            );
            setFormError('isRepresentativeDataRight', false);
          }
          break;
        case 'email':
          if (isEmpty(formData.email) || !isValidEmail(formData.email)) {
            setError(
              'email',
              'Este campo es necesario o no cumple los requisitos',
            );
            setFormError('isRepresentativeDataRight', false);
          }
          break;

        default:
          if (isEmpty(formData[field])) {
            setError(field, 'Este campo es necesario');
            setFormError('isRepresentativeDataRight', false);
          }
          break;
      }
    });
  };

  const validateData = () => {
    setButtonHasClicked(true);
    resetErrors(representativeResetData);
    reset();
    validateFields();
  };

  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value as string);
    onChange(event as ChangeEvent<HTMLInputElement>);
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
            name="name"
            label="Nombre"
            onChange={onChange}
            hasError={hasError}
          />
          <Grid item xs={12} md={6}>
            <FormLabel component="legend" style={{ marginTop: '0.7rem' }}>
              Género
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Mujer"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Hombre"
              />
            </RadioGroup>
          </Grid>
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Fecha de nacimiento"
            name="dateBirth"
            type="date"
            isShrink
            onChange={onChange}
            hasError={hasError}
          />

          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Entidad Federativa de nacimiento"
            name="stateBirth"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="País de nacimiento"
            name="countryBirth"
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
            label="CURP"
            name="CURP"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            // type="file"
            // isShrink
            label="RFC"
            name="RFC"
            onChange={onChange}
            hasError={hasError}
          />
          <Grid item xs={12} md={6}>
            <FormControl sx={{ minWidth: '100%', mt: 2 }}>
              <InputLabel id="demo-simple-select-label">
                Estado civil
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.maritalStatus}
                label="Estado civil"
                name="maritalStatus"
                fullWidth
                onChange={handleChange}
                defaultValue={formData.maritalStatus}
              >
                <MenuItem value="single">Soltero</MenuItem>
                <MenuItem value="married">Casado</MenuItem>
                <MenuItem value="divorced">Divorciado</MenuItem>
                <MenuItem value="freeUnion">Unión libre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Correo electrónico"
            name="email"
            type="email"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            label="Teléfono"
            name="phoneNumber"
            type="tel"
            onChange={onChange}
            hasError={hasError}
          />
          <TextFieldCustom
            formData={formData}
            errors={errors}
            type="file"
            isShrink
            label="Documento de identificación"
            name="identificationDocument"
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

export default RepresentativeData;

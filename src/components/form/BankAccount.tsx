import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
  Stack,
} from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import { bankAccount as bankAccountResetData } from '../../context/formDataMock';
import { useForm } from '../../hooks/useForm';
import TextFieldCustom from '../common/TextFieldCustom';

const BankAccount: FC = () => {
  const {
    setError: setFormError,
    setFormBankAccount,
    setIsFormLoading,
    prevFormStep,
    // nextFormStep,
    reset,
    formState: { bankAccount, isBankAccountRight, isLoading },
    formState,
  } = useContext(FormContext);

  const [buttonHasClicked, setButtonHasClicked] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showData, setShowData] = useState(false);

  const {
    onChange,
    isEmpty,
    setError,
    resetErrors,
    hasError,
    errors,
    formData,
  } = useForm({ ...bankAccount }, { ...bankAccountResetData });

  useEffect(() => {
    if (isBankAccountRight && buttonHasClicked) {
      setButtonHasClicked(false);
      setFormError('isBankAccountRight', false);
      setFormBankAccount({ ...formData });
      reset();
      setIsFormLoading(true);
      setTimeout(() => {
        setIsFormLoading(false);
        setShowSnackbar(true);
        setShowData(true);
        setTimeout(() => {
          setShowSnackbar(false);
        }, 6000);
      }, 1500);
      console.log('todo gud');

      // nextFormStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBankAccountRight, buttonHasClicked]);

  const validateFields = () => {
    const fields = Object.keys(formData) as (keyof typeof formData)[];
    fields.forEach((field) => {
      if (isEmpty(formData[field])) {
        setError(field, 'Este campo es necesario');
        setFormError('isBankAccountRight', false);
      }
    });
  };

  const validateData = () => {
    setButtonHasClicked(true);
    resetErrors(bankAccountResetData);
    reset();
    validateFields();
  };

  return (
    <>
      <Dialog
        open={showData}
        onClose={() => setShowData(false)}
        fullWidth
        maxWidth="lg"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">JSON con los datos</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {JSON.stringify(
              {
                companyData: formState.companyData,
                companyAddress: formState.companyAddress,
                representativeData: formState.representativeData,
                representativeAddress: formState.representativeAddress,
                bankAccount: formState.bankAccount,
              },
              null,
              2,
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowData(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Datos Creado correctamente
        </Alert>
      </Snackbar>
      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box
        sx={{
          width: 'calc(100vw - 96px)',
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
              name="CLABE"
              label="CLABE"
              onChange={onChange}
              hasError={hasError}
            />
            <TextFieldCustom
              formData={formData}
              errors={errors}
              label="Banco"
              name="bank"
              onChange={onChange}
              hasError={hasError}
            />
          </Grid>
        </Box>
        <Stack direction="row" justifyContent="space-between" flexGrow={1}>
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
            Crear
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default BankAccount;

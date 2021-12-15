import { Step, StepLabel, Stepper } from '@mui/material';
import { FC, useContext } from 'react';
import { FormContext } from '../../context/FormContext';

interface FormStepperProps {}

const steps = [
  'Datos de la empresa',
  'Domicilio de la empresa',
  'Representante legal',
  'Representante legal Domicilio',
  'Cuenta bancaria',
];

const FormStepper: FC<FormStepperProps> = ({}) => {
  const {
    formState: { currentStep },
  } = useContext(FormContext);

  return (
    <Stepper activeStep={currentStep} style={{ marginBottom: '2rem' }}>
      {steps.map((label, index) => {
        const labelProps: {
          optional?: React.ReactNode;
        } = {};
        return (
          <Step key={label}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default FormStepper;

import { createContext, FC, useReducer } from 'react';
import {
  nextStep,
  prevStep,
  resetErrors,
  setFormError,
  setIsLoading,
} from './form.actions';
import formReducer from './form.reducer';
import { ErrorFormType, FormState } from './formContext.interface';

export const formInitialState: FormState = {
  isCompanyDataRight: false,
  isAddressDataRight: false,
  isRepresentativeDataRight: false,
  isBankAccountRight: false,
  isLoading: false,
  currentStep: 0,
  // asdasd: {
  //   companyName: '',
  //   tradeName: '',
  //   nationality: '',
  //   dateIncorporation: '',
  //   RFC: '',
  //   taxRegime: '',
  //   industry: '',
  //   proofAddress: '',
  //   phoneNumber: '',
  //   email: '',
  // },
};

export interface FormContextProps {
  formState: FormState;
  setError: (type: ErrorFormType, value: boolean) => void;
  onSubmit: () => void;
  reset: () => void;
  setIsFormLoading: (value: boolean) => void;
  nextFormStep: () => void;
  prevFormStep: () => void;
}

export const FormContext = createContext({} as FormContextProps);

export const FormProvider: FC = ({ children }) => {
  const [formState, dispatch] = useReducer(formReducer, formInitialState);

  const setError = (type: ErrorFormType, value: boolean) => {
    dispatch(setFormError(type, value));
  };

  const reset = () => {
    dispatch(resetErrors());
  };

  const onSubmit = () => {
    dispatch(setIsLoading(true));
  };

  const setIsFormLoading = (value: boolean) => {
    dispatch(setIsLoading(value));
  };

  const nextFormStep = () => {
    dispatch(nextStep());
  };
  const prevFormStep = () => {
    dispatch(prevStep());
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        setError,
        onSubmit,
        nextFormStep,
        prevFormStep,
        reset,
        setIsFormLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

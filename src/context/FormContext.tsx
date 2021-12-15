import { createContext, FC, useReducer } from 'react';
import {
  nextStep,
  prevStep,
  resetErrors,
  setFormError,
  setIsLoading,
  setCompanyData,
} from './form.actions';
import formReducer from './form.reducer';
import { ErrorFormType, FormState, CompanyData } from './formContext.interface';
import { companyData } from './formDataMock';

export const formInitialState: FormState = {
  isCompanyDataRight: false,
  isAddressDataRight: false,
  isRepresentativeDataRight: false,
  isBankAccountRight: false,
  isLoading: false,
  currentStep: 0,
  companyData,
};

export interface FormContextProps {
  formState: FormState;
  setError: (type: ErrorFormType, value: boolean) => void;
  onSubmit: () => void;
  reset: () => void;
  setIsFormLoading: (value: boolean) => void;
  nextFormStep: () => void;
  prevFormStep: () => void;
  setFormCompanyData: (value: CompanyData) => void;
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

  const setFormCompanyData = (value: CompanyData) => {
    dispatch(setCompanyData(value));
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
        setFormCompanyData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

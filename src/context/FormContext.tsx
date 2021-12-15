import { createContext, FC, useReducer } from 'react';
import {
  nextStep,
  prevStep,
  resetErrors,
  setFormError,
  setIsLoading,
  setCompanyData,
  setCompanyAddress,
  setRepresentativeData,
} from './form.actions';
import formReducer from './form.reducer';
import {
  ErrorFormType,
  FormState,
  CompanyData,
  Address,
  RepresentativeData,
} from './formContext.interface';
import { address, companyData, representativeData } from './formDataMock';

export const formInitialState: FormState = {
  isCompanyDataRight: false,
  isCompanyAddressDataRight: false,
  isRepresentativeDataRight: false,
  isRepresentativeAddressRight: false,
  isBankAccountRight: false,
  isLoading: false,
  currentStep: 0,
  companyData,
  companyAddress: address,
  representativeData,
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
  setFormCompanyAddress: (value: Address) => void;
  setFormRepresentativeData: (value: RepresentativeData) => void;
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

  const setFormCompanyAddress = (value: Address) => {
    dispatch(setCompanyAddress(value));
  };

  const setFormRepresentativeData = (value: RepresentativeData) => {
    dispatch(setRepresentativeData(value));
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
        setFormCompanyAddress,
        setFormRepresentativeData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

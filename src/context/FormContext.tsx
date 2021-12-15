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
  setRepresentativeAddress,
  setBankAccount,
} from './form.actions';
import formReducer from './form.reducer';
import {
  ErrorFormType,
  FormState,
  CompanyData,
  Address,
  RepresentativeData,
  BankAccount,
} from './formContext.interface';
import {
  address,
  companyData,
  representativeData,
  bankAccount,
} from './formDataMock';

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
  representativeAddress: address,
  bankAccount,
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
  setFormRepresentativeAddress: (value: Address) => void;
  setFormBankAccount: (value: BankAccount) => void;
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

  const setFormBankAccount = (value: BankAccount) => {
    dispatch(setBankAccount(value));
  };

  const setFormRepresentativeAddress = (value: Address) => {
    dispatch(setRepresentativeAddress(value));
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
        setFormRepresentativeAddress,
        setFormBankAccount,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

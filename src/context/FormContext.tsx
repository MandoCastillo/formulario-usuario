import { createContext, FC, useReducer } from 'react';
import { resetErrors, setFormError, setIsLoading } from './form.actions';
import formReducer from './form.reducer';
import { ErrorFormType, FormState } from './formContext.interface';

export const formInitialState: FormState = {
  isCompanyDataRight: false,
  isAddressDataRight: false,
  isRepresentativeDataRight: false,
  isBankAccountRight: false,
  isLoading: false,
};

export interface FormContextProps {
  formState: FormState;
  setError: (type: ErrorFormType, value: boolean) => void;
  onSubmit: () => void;
  reset: () => void;
  setIsFormLoading: (value: boolean) => void;
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

  return (
    <FormContext.Provider
      value={{
        formState,
        setError,
        onSubmit,
        reset,
        setIsFormLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

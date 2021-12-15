import {
  CompanyData,
  ErrorFormType,
  FormAction,
} from './formContext.interface';

export const setFormError = (
  type: ErrorFormType,
  value: boolean,
): FormAction => ({
  type: 'setError',
  payload: {
    type,
    value,
  },
});

export const resetErrors = (): FormAction => ({
  type: 'resetErrors',
});

export const setIsLoading = (value: boolean): FormAction => ({
  type: 'setIsLoading',
  payload: {
    value,
  },
});

export const nextStep = (): FormAction => ({
  type: 'nextStep',
});

export const prevStep = (): FormAction => ({
  type: 'prevStep',
});

export const setCompanyData = (value: CompanyData): FormAction => ({
  type: 'setCompanyData',
  payload: {
    value,
  },
});

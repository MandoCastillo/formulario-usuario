import {
  Address,
  BankAccount,
  CompanyData,
  ErrorFormType,
  FormAction,
  RepresentativeData,
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

export const setCompanyAddress = (value: Address): FormAction => ({
  type: 'setCompanyAddress',
  payload: {
    value,
  },
});

export const setRepresentativeData = (
  value: RepresentativeData,
): FormAction => ({
  type: 'setRepresentativeData',
  payload: {
    value,
  },
});

export const setRepresentativeAddress = (value: Address): FormAction => ({
  type: 'setRepresentativeAddress',
  payload: {
    value,
  },
});

export const setBankAccount = (value: BankAccount): FormAction => ({
  type: 'setBankAccount',
  payload: {
    value,
  },
});

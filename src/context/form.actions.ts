import { ErrorFormType, FormAction } from './formContext.interface';

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

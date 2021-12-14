export interface FormState {
  isCompanyDataRight: boolean;
  isAddressDataRight: boolean;
  isRepresentativeDataRight: boolean;
  isBankAccountRight: boolean;
  isLoading: boolean;
}

export type ErrorFormType =
  | 'isCompanyDataRight'
  | 'isAddressDataRight'
  | 'isRepresentativeDataRight'
  | 'isBankAccountRight';

export type FormAction =
  | {
      type: 'setError';
      payload: {
        value: boolean;
        type: ErrorFormType;
      };
    }
  | {
      type: 'setIsLoading';
      payload: {
        value: boolean;
      };
    }
  | { type: 'resetErrors' };

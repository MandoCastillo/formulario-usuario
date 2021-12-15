export interface FormState {
  isCompanyDataRight: boolean;
  isAddressDataRight: boolean;
  isRepresentativeDataRight: boolean;
  isBankAccountRight: boolean;
  isLoading: boolean;
  currentStep: number;
  companyData: CompanyData;
}

export interface CompanyData {
  companyName: string;
  tradeName: string;
  nationality: string;
  dateIncorporation: string;
  RFC: string;
  taxRegime: string;
  industry: string;
  proofAddress: string;
  phoneNumber: string;
  email: string;
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
  | { type: 'resetErrors' }
  | { type: 'nextStep' }
  | {
      type: 'setCompanyData';
      payload: {
        value: CompanyData;
      };
    }
  | { type: 'prevStep' };

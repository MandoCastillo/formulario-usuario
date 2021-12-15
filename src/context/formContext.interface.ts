export interface FormState {
  isCompanyDataRight: boolean;
  isCompanyAddressDataRight: boolean;
  isRepresentativeDataRight: boolean;
  isRepresentativeAddressRight: boolean;
  isBankAccountRight: boolean;
  isLoading: boolean;
  currentStep: number;
  companyData: CompanyData;
  companyAddress: Address;
  representativeData: RepresentativeData;
  representativeAddress: Address;
  bankAccount: BankAccount;
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

export interface RepresentativeData {
  name: string;
  genre: 'male' | 'female';
  dateBirth: string;
  stateBirth: string;
  countryBirth: string;
  nationality: string;
  CURP: string;
  RFC: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'freeUnion';
  email: string;
  phoneNumber: string;
  identificationDocument: string;
}

export interface Address {
  street: string;
  outsideNumber: string;
  innerNumber?: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

export interface BankAccount {
  CLABE: string;
  bank: string;
}

export type ErrorFormType =
  | 'isCompanyDataRight'
  | 'isCompanyAddressDataRight'
  | 'isRepresentativeDataRight'
  | 'isRepresentativeAddressRight'
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
  | { type: 'prevStep' }
  | { type: 'nextStep' }
  | {
      type: 'setCompanyData';
      payload: {
        value: CompanyData;
      };
    }
  | {
      type: 'setRepresentativeData';
      payload: {
        value: RepresentativeData;
      };
    }
  | {
      type: 'setCompanyAddress';
      payload: {
        value: Address;
      };
    }
  | {
      type: 'setBankAccount';
      payload: {
        value: BankAccount;
      };
    }
  | {
      type: 'setRepresentativeAddress';
      payload: {
        value: Address;
      };
    };

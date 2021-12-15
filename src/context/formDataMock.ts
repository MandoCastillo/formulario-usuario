import {
  Address,
  BankAccount,
  CompanyData,
  RepresentativeData,
} from './formContext.interface';

export const companyData: CompanyData = {
  companyName: '',
  tradeName: '',
  nationality: '',
  dateIncorporation: '',
  RFC: '',
  taxRegime: '',
  industry: '',
  proofAddress: '',
  phoneNumber: '',
  email: '',
};

export const address: Address = {
  city: '',
  country: '',
  neighborhood: '',
  outsideNumber: '',
  state: '',
  street: '',
  zipCode: '',
  innerNumber: '',
};

export const representativeData: RepresentativeData = {
  CURP: '',
  RFC: '',
  countryBirth: '',
  dateBirth: '',
  email: '',
  genre: 'female',
  identificationDocument: '',
  maritalStatus: 'single',
  name: '',
  nationality: '',
  phoneNumber: '',
  stateBirth: '',
};

export const bankAccount: BankAccount = {
  CLABE: '',
  bank: '',
};

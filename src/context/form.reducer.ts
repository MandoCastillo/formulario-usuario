import { FormAction, FormState } from './formContext.interface';

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'setError':
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };

    case 'setIsLoading':
      return {
        ...state,
        isLoading: action.payload.value,
      };

    case 'resetErrors':
      return {
        ...state,
        isCompanyDataRight: true,
        isCompanyAddressDataRight: true,
        isRepresentativeDataRight: true,
        isBankAccountRight: true,
      };

    case 'nextStep': {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }

    case 'prevStep':
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case 'setCompanyData':
      return {
        ...state,
        companyData: action.payload.value,
      };

    case 'setCompanyAddress':
      return {
        ...state,
        companyAddress: action.payload.value,
      };

    case 'setRepresentativeData':
      return {
        ...state,
        representativeData: action.payload.value,
      };

    default:
      return state;
  }
};

export default formReducer;

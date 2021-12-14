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
        isAddressDataRight: true,
        isRepresentativeDataRight: true,
        isBankAccountRight: true,
      };

    case 'nextStep': {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }
    case 'prevStep': {
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    }

    default:
      return state;
  }
};

export default formReducer;

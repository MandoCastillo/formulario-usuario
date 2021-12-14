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
        isCompanyDataRight: false,
        isAddressDataRight: false,
        isRepresentativeDataRight: false,
        isBankAccountRight: false,
      };

    default:
      return state;
  }
};

export default formReducer;

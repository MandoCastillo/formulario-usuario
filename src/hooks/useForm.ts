import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T, errorsInitialState?: T) => {
  const [formData, setFormData] = useState(initState);
  const [errors, setErrors] = useState(
    errorsInitialState ? { ...errorsInitialState } : { ...initState },
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const setError = (property: keyof T, value: string) => {
    setErrors((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initState });
  };

  const resetErrors = (value?: T) => {
    setErrors(value ? { ...value } : { ...errorsInitialState!! });
  };

  const isValidEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isValidPhone = (phone: string): boolean => {
    const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(phone);
  };

  const isEmpty = (text: string): boolean => {
    return text.trim().length < 1;
  };

  const hasError = (property: keyof T) => {
    const data = errors[property];

    if (typeof data === 'string') {
      return data.length > 1;
    }
    return false;
  };

  return {
    ...formData,
    ...errors,

    // properties
    formData,
    errors,

    // Methods
    isValidEmail,
    isValidPhone,
    isEmpty,
    hasError,
    onChange,
    setError,
    resetForm,
    resetErrors,
  };
};

import { Grid, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface TextFieldCustomProps<T> {
  label: string;
  name: keyof T;
  formData: T;
  errors: T;
  type?: 'text' | 'file' | 'number' | 'email' | 'tel';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hasError: Function;
}

const TextFieldCustom = <T,>({
  formData,
  onChange,
  hasError,
  errors,
  name,
  label,
  type = 'text',
}: TextFieldCustomProps<T>) => {
  return (
    <Grid item xs={6}>
      <TextField
        margin="normal"
        required
        type={type}
        fullWidth
        label={label}
        name={name as string}
        value={formData[name]}
        onChange={onChange}
        helperText={errors[name]}
        error={hasError(name)}
      />
    </Grid>
  );
};

export default TextFieldCustom;

import { useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import { useTransform } from './useTransform';

export function TextFieldRHF(props) {
  const { name, control, ...rest } = props;
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    disabled: rest.disabled,
    rules: { required: rest.required }
  });

  const { value, onChange } = useTransform({
    value: field.value,
    onChange: field.onChange
  });

  return (
    <TextField
      {...rest}
      name={field.name}
      value={value}
      onChange={(event) => {
        onChange(event);
        if (typeof rest.onChange === 'function') {
          rest.onChange(event);
        }
      }}
      onBlur={(event) => {
        field.onBlur();
        if (typeof onBlur === 'function') {
          onBlur(event);
        }
      }}
      fullWidth
      className="my-8"
      type="text"
      variant="outlined"
      autoComplete="off"
      error={!!error}
      helperText={error}
    />
  );
}

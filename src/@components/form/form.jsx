'use client';

import { FormProvider, useForm } from 'react-hook-form';

export function Form(props) {
  const { handleSubmit, children, FormProps, formContext, onSuccess, onError, ...useFormProps } =
    props;
  if (!formContext) {
    return <FormWithoutContext {...{ onSuccess, onError, FormProps, children, ...useFormProps }} />;
  }
  if (typeof onSuccess === 'function' && typeof handleSubmit === 'function') {
    console.warn('Property `onSuccess` will be ignored because handleSubmit is provided');
  }
  return (
    <FormProvider {...formContext}>
      <form
        noValidate
        {...FormProps}
        onSubmit={
          handleSubmit
            ? handleSubmit
            : onSuccess
              ? formContext.handleSubmit(onSuccess, onError)
              : () => console.log('submit handler `onSuccess` is missing')
        }
      >
        {children}
      </form>
    </FormProvider>
  );
}

function FormWithoutContext(props) {
  const { onSuccess, onError, FormProps, children, ...useFormProps } = props;
  const methods = useForm({ ...useFormProps });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(
          onSuccess ? onSuccess : () => console.log('submit handler `onSuccess` is missing'),
          onError
        )}
        noValidate
        {...FormProps}
      >
        {children}
      </form>
    </FormProvider>
  );
}

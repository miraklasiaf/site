export function useTransform(options) {
  const value =
    typeof options.transform?.input === 'function'
      ? options.transform.input(options.value)
      : options.value;

  const onChange = (...event) => {
    if (typeof options.transform?.output === 'function') {
      options.onChange(options.transform.output(...event));
    } else {
      options.onChange(...event);
    }
  };

  return {
    value,
    onChange,
  };
}

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  RadioGroup as Group
} from "@chakra-ui/react";
import { useField } from "formik";
import { radioPropType } from "./FormComponent";

export const RadioGroup = ({
  label,
  name,
  error,
  touched,
  placeholder,
  children,
  required,
  labelStyle,
  ...rest
}: radioPropType) => {
  return (
    <FormControl isInvalid={error && touched ? true : false} isRequired={required}>
      <FormLabel {...labelStyle} htmlFor={name}>
        {label}
      </FormLabel>
      <Group id={name} {...rest}>
        {children}
      </Group>
      <FormErrorMessage as="div">{error}</FormErrorMessage>
    </FormControl>
  );
};

export default RadioGroup;

export function RadioGroupFormControl({ name, children, ...rest }: radioPropType) {
  const [field, { error, touched }, helper] = useField(name);
  const handleChange = (value: string) => {
    helper.setValue(value);
  };
  return (
    <RadioGroup {...rest} {...field} error={error} touched={touched} onChange={handleChange}>
      {children}
    </RadioGroup>
  );
}

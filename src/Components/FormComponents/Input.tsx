import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useField } from "formik";
import { commonFormComponentType } from "./FormComponent";

export default function FormInput({
  label,
  name,
  error,
  touched,
  placeholder,
  maxLength,
  value,
  setvalue,
  required,
  labelStyle,
  infoIcon,
  disabled,
  showLength = false,
  ...rest
}: commonFormComponentType & { showLength?: boolean }) {
  return (
    <FormControl
      isInvalid={error && touched ? true : false}
      isRequired={required}
    >
      <Flex justifyContent="space-between">
        {label && (
          <FormLabel {...labelStyle} htmlFor={name}>
            {label}
          </FormLabel>
        )}
      </Flex>
      <Input
        bg={"white"}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLength ?? 500}
        id={name}
        value={value}
        {...rest}
      />
      <FormErrorMessage as="div">{error}</FormErrorMessage>
    </FormControl>
  );
}

export function InputFormControl({
  name,
  ...rest
}: commonFormComponentType & { showLength?: boolean }) {
  const [field, { error, touched }, helper] = useField(name);
  const handleChange = (e: any) => {
    helper.setValue(e.target.value);
  };
  return (
    <FormInput
      {...rest}
      {...field}
      value={field.value}
      error={error}
      touched={touched}
      onChange={handleChange}
    />
  );
}

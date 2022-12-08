import { optionType } from "./FormComponent";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useField } from "formik";

export default function FormSelect({
  label,
  name,
  options,
  error,
  value,
  touched,
  placeholder,
  setvalue,
  required,
  labelStyle,
  fieldStyle,
  disabled,
  ...rest
}: optionType) {
  return (
    <FormControl
      isInvalid={error && touched ? true : false}
      isRequired={required}
    >
      {label && <FormLabel {...labelStyle} htmlFor={name}>
        {label}
      </FormLabel>}
      <Select
        id={name}
        {...fieldStyle}
        {...rest}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        color={value ? "black" : "grey"}
      >
        {options?.map((option:any, index:any) => (
          <option
            style={{ color: "black" }}
            key={`${index}_${option.value}`}
            data-testid={`${name}_${option.value}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>
      <FormErrorMessage as="div">
        <>{error}</>
      </FormErrorMessage>
    </FormControl>
  );
}

export function SelectFormControl({
  options,
  name,
  handleSelect,
  ...rest
}: optionType & { handleSelect?: (e: any) => void }) {
  const [field, { error, touched }, helper] = useField(name);
  // eslint-disable-next-line
  return (
    <FormSelect
      {...rest}
      {...field}
      options={options}
      error={error}
      touched={touched}
      value={field?.value ?? 0}
      onChange={(e: any) => {
        helper.setValue(e.target.value);
        if (handleSelect)
          handleSelect(e.target.value);
      }}
    />
  );
}

import { Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useField } from "formik";

export default function DatePicker({ label, name,error ,touched,placeholder, onChange = () => {}, required, ...rest }: any) {

  return (
    <FormControl isInvalid={error && touched ? true : false}  isRequired={required}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input placeholder={placeholder} id={name} {...rest} onChange={onChange} type="date" min={new Date().toISOString().slice(0, -14)} />
      <FormErrorMessage as="div">{error}</FormErrorMessage>
    </FormControl>
  );
}

export function DatePickerFormControl({ name, ...rest }: any) {
  const [field, { error, touched },helper ] = useField(name);

  return <DatePicker {...rest} {...field}  error={error} touched={touched} onChange={(date:any) =>{ helper.setValue(date.target.value)}}  />;
}
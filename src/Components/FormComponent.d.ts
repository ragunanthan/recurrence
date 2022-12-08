import {  FormLabelProps, NumberInputProps, RadioGroupProps, SelectFieldProps, SelectProps, TextareaProps } from "@chakra-ui/react";

export type commonFormComponentType  ={
  required: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  touched?: Boolean;
  value?: any;
  onChange?: (e : any) => void;
  rest?: any
  maxLength?:number
  setvalue?:any;
  labelStyle?: FormLabelProps;
  responsive?:boolean;
  infoIcon?:boolean;
  disabled?:boolean;
  width?:string;
} 
export interface optionType extends commonFormComponentType,  SelectFieldProps {
  options: { label: string | number; value: string | number }[];
  fieldStyle ? : SelectProps;
}

export interface textAreaType extends commonFormComponentType, TextareaProps {
  maxLength?:  number;
}

export interface imageUploader extends commonFormComponentType {

}

export interface radioPropType extends commonFormComponentType, RadioGroupProps {
  children : React.Elements;
}

export interface InputStepperPropType extends commonFormComponentType , NumberInputProps {
  currencySymbol : string;
}

export interface CheckBoxPropType extends commonFormComponentType {
  options: { label: string | number; value: string | number }[];
}

export interface PhoneNumberPropType extends commonFormComponentType , NumberInputProps {
}
export type FormikControlProps =   optionType | textAreaType | radioPropType;

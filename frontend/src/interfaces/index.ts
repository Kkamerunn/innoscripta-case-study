import { ChangeEventHandler, FormEventHandler } from "react";

export interface InputProps {
  id: string;
  placeholder?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: string;
  type: string;
}

export interface FormData {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

export interface AlertProps {
  msg: string;
}

export interface FormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: FormData;
  isSignUp: boolean;
}

export interface FieldProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  name: string;
  type: string;
  label: string;
}

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

export interface User {
  username: string;
  token: string;
}

export interface NewsAPIArticle {
  source_id: string;
  source_name: string;
  author: string;
  title: string;
  url: string;
  url_to_image: string;
  published_at: string;
  country_id: number;
  category_id: number;
}

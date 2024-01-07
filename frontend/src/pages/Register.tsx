import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import { FormData } from "../interfaces";
import Alert from "../components/Alert";
import axiosClient from "../config/axiosClient";
import Loader from "../components/Loader";
import axios from "axios";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const Register = () => {
  const [formData, setFormData] = useState<FormData>(initialFormValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      const { data } = await axiosClient.post(`/register`, formData);
      console.log(data);
      setFormData(initialFormValues);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors(Object.values(error.response?.data.errors));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof FormData;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <>
      <h1 className="text-stone-700 font-bold text-3xl text-center">
        Sign up and start getting the{" "}
        <span className="uppercase font-black text-stone-900">news!</span>
      </h1>
      {errors.length > 0 &&
        errors.map((error, i) => <Alert key={i} msg={error} />)}
      {loading && <Loader />}
      <Form
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        isSignUp={true}
      />
      <nav className="lg:flex lg:justify-center">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Already have an account? Log in
        </Link>
      </nav>
    </>
  );
};

export default Register;

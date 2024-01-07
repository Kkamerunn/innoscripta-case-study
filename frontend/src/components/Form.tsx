import { FormProps } from "../interfaces";
import Field from "./Field";

const Form = ({
  handleSubmit,
  handleChange,
  formData,
  isSignUp,
}: FormProps) => {
  return (
    <form
      className="my-3 bg-white shadow-xl rounded-lg px-6 py-3"
      onSubmit={handleSubmit}
    >
      {isSignUp && (
        <Field
          handleChange={handleChange}
          value={formData.name}
          name="name"
          label="name"
          type="text"
          placeholder="Your name"
        />
      )}
      <Field
        handleChange={handleChange}
        value={formData.email}
        name="email"
        label="email"
        type="email"
        placeholder="Your email"
      />
      <Field
        handleChange={handleChange}
        value={formData.password}
        name="password"
        label="password"
        type="password"
        placeholder="Your password"
      />
      {isSignUp && (
        <Field
          handleChange={handleChange}
          value={formData.password_confirmation}
          name="password_confirmation"
          type="password"
          label="repeat password"
          placeholder="Repeat your password"
        />
      )}
      <input
        type="submit"
        value={isSignUp ? "Sign up" : "Sign In"}
        className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer transition-colors duration-1000 ease-linear mb-4"
      />
    </form>
  );
};

export default Form;

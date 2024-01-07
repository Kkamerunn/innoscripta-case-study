import Input from "./Input";
import { FieldProps } from "../interfaces";

const Field = ({
  handleChange,
  value,
  name,
  type,
  placeholder,
  label,
}: FieldProps) => {
  return (
    <div className="my-4">
      <label
        className="uppercase text-stone-500 text-lg font-bold"
        htmlFor={name}
      >
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Field;

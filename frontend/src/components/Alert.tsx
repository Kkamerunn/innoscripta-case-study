import { AlertProps } from "../interfaces";

const Alert = ({ msg }: AlertProps) => {
  return (
    <div className="bg-gradient-to-br from-red-400 to-red-600 text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-3">
      {msg}
    </div>
  );
};

export default Alert;

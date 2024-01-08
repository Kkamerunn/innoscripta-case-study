import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-16 flex justify-between items-center px-5">
      <Link to="/" className="text-white font-black tracking-wide">
        Home
      </Link>
      <div className="flex gap-x-6">
        <button className="text-white font-black tracking-wide">
          News API
        </button>
        <button className="text-white font-black tracking-wide">
          The Guardian
        </button>
      </div>
      <div>
        {auth.username ?? (
          <p className="text-white font-black tracking-wide">
            Hi {auth.username}
          </p>
        )}
        {auth.token ? (
          <button
            className="text-white font-black tracking-wide"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-white font-black tracking-wide">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

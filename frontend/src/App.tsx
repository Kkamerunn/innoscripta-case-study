import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { NewsProvider } from "./context/NewsProvider";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NewsProvider>
            <Routes>
              <Route path="/" element={<ProtectedLayout />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="/auth" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
            </Routes>
          </NewsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

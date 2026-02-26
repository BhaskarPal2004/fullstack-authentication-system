
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/dashboard");
      toast.success("Login Successfully");
    } catch (err) {
      toast.error(
        err.response?.data || "Login failed. Please check credentials."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="p-6 bg-white border rounded space-y-3 w-80 shadow"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
        />

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 w-full rounded pr-10"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>

        <Link
          to="/register"
          className="text-blue-500 text-sm text-center block"
        >
          Don’t have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
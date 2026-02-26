
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        "Password must contain 1 uppercase letter, 1 symbol, and be at least 6 characters"
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/");
      toast.success("Register Successfully Please Login");
    } catch (err) {
      toast.error(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="p-6 bg-white border rounded space-y-3 w-80 shadow"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          name="username"
          placeholder="Username"
          className="border p-2 w-full rounded"
        />

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

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded">
          Register
        </button>

        <Link to="/" className="text-blue-500 text-sm text-center block">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
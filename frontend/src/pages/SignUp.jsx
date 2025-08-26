import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function SignUp() {
  const [formData, setFormData] = useState({});   // ✅ fixed typo
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,               // ✅ use correct state
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // ✅ check based on response status
      if (!res.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      // ✅ success
      setLoading(false);
      setError(null);
        navigate("/sign-in");  // Redirect to sign-in page after successful signup

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading}>
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>

      <div>
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default SignUp;

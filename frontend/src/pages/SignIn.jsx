import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInstart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";

function SignIn() {
  const [formData, setFormData] = useState({});   // ✅ fixed typo
    const { loading, error } = useSelector((state) => state.user); // ✅ get loading and error from Redux state
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,               // ✅ use correct state
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(signInstart());
        // setError(null);
  
        const res = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
  
        // ✅ check based on response status
        if (!res.ok) {
          dispatch(signInFailure(data.message || "Signin failed"));
          // setError(data.message || "Signin failed");
          // setLoading(false);
          return;
        }
  
        // ✅ success
        dispatch(signInSuccess(data));
          navigate("/");  // Redirect to sign-in page after successful signup
  
      } catch (error) {
        dispatch(signInFailure(error.message || "Signin failed"));
      }
    };
  
    return (
      <>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
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
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
  
        <div>
          <p>Dont Have an account?</p>
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </div>
  
        {error && <p className="text-red-500">{error}</p>}
      </>
    );
}

export default SignIn;

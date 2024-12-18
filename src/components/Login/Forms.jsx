import React, { useState } from "react";
import ContactInfo from "../ContactInfo";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMemory } from "../../Hooks/useMemory";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useNavigation

function Forms() {
  const baseURL = import.meta.env.VITE_API_URL;

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setData, login } = useMemory();
  const navigate = useNavigate(); // Correct hook for navigation

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required"); // Show error if fields are empty
      return;
    }

    setLoading(true); // Start loading state
    try {
      const response = await axios.post(`${baseURL}/login/`, {
        email,
        password,
      });

      if (response.data.access_data) {
        toast.success("Login successful");
        const { access, refresh } = response.data.access_data;

        // Save user credentials and tokens in localStorage
        setData("up", { email, password });
        login(access, refresh); // Set login state

        // Save tokens to localStorage
        setData("ar", { access, refresh });

        // Navigate to dashboard after successful login
        navigate("/dashboard");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setLoading(false); // Stop loading state
      toast.error("Oops, please check your credentials."); // Show error on failed login
    } finally {
      setLoading(false); // Ensure loading state is stopped after API call
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="contact-form">
              <h4>Login</h4>
              <p>Supply the credentials to your account</p>
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12" style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    style={{
                      position: "absolute",
                      top: "20%",
                      right: "40px",
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    {showPassword ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </button>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p>
                    Don't have an account?{" "}
                    <a href="/sign-up" style={{ fontSize: "14px" }}>
                      sign up
                    </a>
                  </p>
                  <p>
                    <a href="/forgot-password" style={{ fontSize: "14px" }}>
                      Forgot Password?
                    </a>
                  </p>
                </div>
                <div
                  className="col-md-6 text-right"
                  style={{ marginTop: "-2px", marginBottom: "4px" }}
                >
                  <input
                    type="submit"
                    name="submit"
                    value={loading ? "Please wait..." : "Login"}
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default Forms;

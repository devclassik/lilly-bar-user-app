import React, { useState } from "react";
import ContactInfo from "../ContactInfo";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Forms() {
  const baseURL = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required"); 
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${baseURL}/forgot_password/`, {
        email,
      });

      if (response.data.success) {
        toast.success("Check your email for password reset instructions.");
        localStorage.setItem("forgot_password", email); 
        navigate("/verify-otp");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("No user with such email or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="contact-form">
              <h4>Forgot Password</h4>
              <p>Enter account email address</p>
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                      Sign Up
                    </a>
                  </p>
                  <p>
                    <a href="/login" style={{ fontSize: "14px" }}>
                      Login
                    </a>
                  </p>
                </div>

                <div className="col-md-6 text-right">
                  <input
                    type="submit"
                    name="submit"
                    value={loading ? "Please wait..." : "Send"}
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

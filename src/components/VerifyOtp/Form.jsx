import React, { useState } from "react";
import ContactInfo from "../ContactInfo";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMemory } from "../../Hooks/useMemory";

function Forms() {
  const baseURL = import.meta.env.VITE_API_URL;
  const { getAllData } = useMemory();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Email and OTP are required.");
      return;
    }

    setLoading(true);

    try {
      // Fetch email from local storage or fallback
      const storedEmail = getAllData("forgot_password") || '';

      const response = await axios.post(`${baseURL}/set_password/`, {
        email: storedEmail,
        otp,
      });

      toast.success("OTP verification successful!");
      console.log("OTP verification successful:", response.data);
    } catch (err) {
      console.error("OTP verification error:", err);
      toast.error("Error occurred while verifying OTP. Please try again.");
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
              <h4>Verify OTP</h4>
              <p>Enter the OTP sent to your email</p>
              <form onSubmit={handleSubmit} className="row">
                {/* Email Input */}
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* OTP Input */}
                <div className="col-md-12">
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                {/* Links */}
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

                {/* Submit Button */}
                <div className="col-md-6 text-right">
                  <input
                    type="submit"
                    name="submit"
                    value={loading ? "Please wait..." : "Verify OTP"}
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

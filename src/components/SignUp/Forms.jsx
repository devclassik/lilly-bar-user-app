import React, { useState } from "react";
import ContactInfo from "../ContactInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useMemory } from "../../Hooks/useMemory";

function Forms() {
  const baseFormState = {
    email: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    address: "",
    phone_number: "",
    date_of_birth: "",
    office_address: "",
    state_of_origin: "",
    password: "",
  };

  const [formData, setFormData] = useState(baseFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { createAccount } = useMemory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        toast.error(`${key.replace("_", " ")} is required`);
        return;
      }
    }

    setLoading(true);
    try {
      const response = await createAccount(formData);

      if (response.success) {
        toast.success("Account created successfully!");
        navigate("/login");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Email and or phone number already exist");
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
              <h4>Sign Up</h4>
              <p>Supply the credentials to create an account</p>
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="middle_name"
                    placeholder="Middle Name"
                    value={formData.middle_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="date"
                    name="date_of_birth"
                    placeholder="Date of Birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="address"
                    placeholder="Home Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="office_address"
                    placeholder="Office Address"
                    value={formData.office_address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="state_of_origin"
                    placeholder="State of Origin"
                    value={formData.state_of_origin}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12" style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
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

                <div className="col-md-12">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" style={{ fontSize: "14px" }}>
                      Login
                    </a>
                  </p>
                </div>
                <div className="col-md-6 text-right">
                  <input
                    type="submit"
                    name="submit"
                    value={loading ? "Please wait..." : "Register"}
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

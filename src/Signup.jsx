import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });
  const [agency, setAgency] = useState("yes");
  const navigate = useNavigate();

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const fields = [
    { key: "fullName", label: "Full Name", required: true, type: "text" },
    { key: "phone", label: "Phone number", required: true, type: "tel" },
    { key: "email", label: "Email address", required: true, type: "email" },
    { key: "password", label: "Password", required: true, type: "password" },
    { key: "company", label: "Company name", required: false, type: "text" },
  ];

  return (
    <div className="form-page">
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <form className="form" onSubmit={handleSubmit}>
        {fields.map((f) => (
          <div className="field" key={f.key}>
            <label htmlFor={f.key}>
              {f.label}
              {f.required && <span style={{ color: "#e74c3c" }}>*</span>}
            </label>
            <input
              id={f.key}
              type={f.type}
              placeholder={`Enter ${f.label.toLowerCase()}`}
              value={form[f.key]}
              onChange={update(f.key)}
              required={f.required}
            />
          </div>
        ))}

        <div className="radio-group">
          <p>
            Are you an Agency?<span style={{ color: "#e74c3c" }}>*</span>
          </p>
          <div className="options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={agency === "yes"}
                onChange={() => setAgency("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={agency === "no"}
                onChange={() => setAgency("no")}
              />
              No
            </label>
          </div>
        </div>

        <div className="submit-wrap">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

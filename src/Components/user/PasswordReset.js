// PasswordReset.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { TEInput, TERipple } from "tw-elements-react";

export const PasswordReset = ({ setForm, processResetPassAPI }) => {
  const [formDt, setFormDt] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError("");
    if (name === "confirmPassword") {
      value !== formDt.password
        ? setError("Password should match")
        : setError("");
    }

    if (name === "password") {
      value.length < 6 && setError("At least 6 characters required");
      !/[0-9]/.test(value) && setError("At least one number is required");
      !/[A-Z]/.test(value) && setError("At least one Uppercase is required");
      !/[a-z]/.test(value) && setError("At least one Lowercase is required");
    }
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formDt;

    if (confirmPassword !== rest.password) {
      return toast.error("Password should match!");
    }

    processResetPassAPI(rest);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h3 className="text-3xl font-semibold mb-6">Reset New Password</h3>
        <hr className="mb-6" />

        <TEInput
          required={true}
          className="mb-5"
          type="number"
          name="otp"
          onChange={handleOnChange}
          placeholder="OTP"
        />
        <TEInput
          required={true}
          className="mb-5"
          type="password"
          name="password"
          onChange={handleOnChange}
          placeholder="Password"
        />
        <TEInput
          required={true}
          type="password"
          name="confirmPassword"
          onChange={handleOnChange}
          placeholder="Confirm Password"
        />
        <div className="py-3 text-red-500 font-bold">{error}</div>
        <div className="d-grid mt-3">
          <TERipple>
            <button
              className="bg-dark text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={error}
            >
              Reset Password
            </button>
          </TERipple>
        </div>

        <div className="text-end py-3">
          Didn't receive OTP{" "}
          <a onClick={() => setForm("otp")} href="#!" className="text-blue-500">
            Request again.
          </a>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;

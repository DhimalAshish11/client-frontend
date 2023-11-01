// ResetPassword.js
// No changes made

// PasswordOTP.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { requestPassOTP, resetPass } from "../../helper/axios";
import PasswordOTP from "./PasswordOTP";
import PasswordReset from "./PasswordReset";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState("otp");
  const [email, setEmail] = useState("");
  const [resp, setResp] = useState({});

  const handleOnOtpRequest = async (email) => {
    setEmail(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email");
    }

    const pending = requestPassOTP(email);
    toast.promise(pending, {
      pending: "please wait....",
    });

    const result = await pending;
    if (result.status === "success") {
      setResp(result);
      setForm("reset");
    } else {
      toast.error(result.message);
    }
  };

  const processResetPassAPI = async (obj) => {
    const pending = resetPass({ ...obj, email });
    toast.promise(pending, {
      pending: "Please wait...",
    });

    const { status, message } = await pending;
    toast[status](message);

    status === "success" && navigate("/");
  };

  const forms = {
    otp: <PasswordOTP handleOnOtpRequest={handleOnOtpRequest} />,
    reset: (
      <PasswordReset
        setForm={setForm}
        processResetPassAPI={processResetPassAPI}
      />
    ),
  };

  return (
    <>
      <Header />
      <main className="pt-5">
        {resp.message && (
          <Container>
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp.message}
            </Alert>
          </Container>
        )}
        <div>{forms[form]}</div>
      </main>
      <Footer />;
    </>
  );
};

export default ResetPassword;

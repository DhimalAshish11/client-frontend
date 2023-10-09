import React from "react";
import { useEffect, useState } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { postNewUserVerificationInfo } from "../../helper/axios";
import { toast } from "react-toastify";

const UserVerification = () => {
  const [queryStrings] = useSearchParams();
  const navigate = useNavigate();
  const c = queryStrings.get("c");
  const e = queryStrings.get("e");
  const [showSpinner, setShowSpinner] = useState(true);
  const [resp, setResp] = useState({});

  useEffect(() => {
    // callAPI &&
    postNewUserVerificationInfo({ c, e }).then((resp) => {
      setResp(resp);
      setShowSpinner(false);
      toast[resp.status](resp.message);
      if (resp.status === "success") {
        navigate("/");
      }
    });

    // callAPI.current = false;
  }, [c, e, navigate]);

  return (
    <div>
      <Header />
      <main className="main mt-5">
        <Container>
          {showSpinner ? (
            <div className="mt-5 text-center ">
              <Spinner animation="border" variant="primary" className="fs-1" />
              <br />
              Please wait while account being verified...
            </div>
          ) : (
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp.message}
            </Alert>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default UserVerification;

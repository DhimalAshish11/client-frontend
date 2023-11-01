import React, { useRef } from "react";
import { TEInput, TERipple } from "tw-elements-react";

const PasswordOTP = ({ handleOnOtpRequest }) => {
  const emailRef = useRef("");

  const handleOnOTPRequest = () => {
    const { value } = emailRef.current;
    if (value) {
      handleOnOtpRequest(value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h3 className="text-3xl font-semibold mb-6 pb-5">Request OTP</h3>

        <TEInput ref={emailRef} placeholder="please enter your email" />

        <div className="mt-8">
          <TERipple>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleOnOTPRequest}
            >
              Request OTP
            </button>
          </TERipple>
        </div>
      </div>
    </div>
  );
};

export default PasswordOTP;

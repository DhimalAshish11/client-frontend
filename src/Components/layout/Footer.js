import React from "react";

export const Footer = () => {
  const inputs = ["Service", "Product", "Catergory", "Order"];
  const input2 = ["Service", "Product", "Catergory", "Order"];
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="flex justify-evenly p-4">
          <ul>
            {inputs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <ul>
            {input2.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

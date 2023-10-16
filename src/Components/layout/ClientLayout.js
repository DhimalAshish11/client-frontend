import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export const ClientLayout = ({ children, title }) => {
  return (
    <div className="client-layout">
      <main className="main">
        <Header />

        <Container>
          <div className="mt-3">
            <h3>{title}</h3>
            <hr />
          </div>
          <div className="page-content mt-5">{children}</div>
        </Container>

        <Footer />
      </main>
    </div>
  );
};

export default ClientLayout;

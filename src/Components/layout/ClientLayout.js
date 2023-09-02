import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export const ClientLayout = ({ children }) => {
  return (
    <div className="client-layout">
      <main className="main">
        <Header />

        <Container>
          <div className="page-content">{children}</div>
        </Container>

        <Footer />
      </main>
    </div>
  );
};

export default ClientLayout;

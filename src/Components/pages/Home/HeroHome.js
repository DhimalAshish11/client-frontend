import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardOverlay,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import CustomCarousel from "../../media/CustomCarousel";
import a from "../../../assets/a.jpg";
import b from "../../../assets/b.jpg";

export const HeroHome = () => {
  return (
    <div className="">
      <MDBRow>
        <MDBCol size="6" lg="8">
          <CustomCarousel />
        </MDBCol>{" "}
        <MDBCol size="6" lg="4">
          <MDBRow size="6">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src={a}
                alt="..."
                width={200}
                height={200}
              />
              <MDBCardOverlay>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>Last updated 3 mins ago</MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </MDBRow>
          <MDBRow size="6">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src={b}
                alt="..."
                width={200}
                height={200}
              />
              <MDBCardOverlay>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>Last updated 3 mins ago</MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </MDBRow>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol size="6" sm="4">
          sm="6" sm="4"
        </MDBCol>
        <MDBCol size="6" sm="4">
          sm="6" sm="4"
        </MDBCol>
        <MDBCol size="6" sm="4">
          sm="6" sm="4"
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default HeroHome;

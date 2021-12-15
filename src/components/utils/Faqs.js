import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Faq from "react-faq-component";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: "title",
        content: `content`,
      },
      {
        title: "title",
        content: `content`,
      },
      {
        title: "title",
        content: `content`,
      },
      {
        title: "title",
        content: `content`,
      },
      {
        title: "title",
        content: `content`,
      },
      {
        title: "title",
        content: `content`,
      },
 
     
    ],
  };

  const styles = {
    bgColor: "transparent",
    titleTextColor: "blue",
    rowTitleColor: "#000",
    rowContentColor: "#000",
    arrowColor: "#000",
    rowContentPaddingTop: "5px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "10px",
    rowContentPaddingRight: "10px",
  };

  return (
    <>
      <Container fluid className="faqs " id="faqs">
        <div className="container jumbotron pt-5  pb-5">
          <Row>
            <h2 className="">FAQ</h2>
          </Row>
          <Row className=" m-auto">
            <Col lg={12}>
              <Faq data={data} styles={styles} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FAQ;

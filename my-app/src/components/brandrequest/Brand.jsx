import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

const defaultFormData = {
  influencer: "",
  brand: "",
  date: "",
  request: "",
};

export default function Brand() {
  const [formData] = useState(defaultFormData);

  return (
    <Container>
      <Row>
        <Col>
          <Formik enableReinitialize={true} initialValues={formData}>
            <Form>
              <Field
                type="text"
                name="influencer"
                className="form-control mt-2"
                placeholder="Influencer"
              />
              <Field
                type="text"
                name="brand"
                className="form-control mt-2"
                placeholder="Brand"
              />
              <Field
                component="textarea"
                name="request"
                className="form-control mt-2"
                placeholder="Enter request here"
              />
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

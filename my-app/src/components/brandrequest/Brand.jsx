import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { format } from "date-fns";

const defaultFormData = {
  influencer: "",
  brand: "The Brand Company",
  date: format(new Date(), "yyyy-MM-dd"),
  request: "",
};

export default function Brand() {
  const navigate = useNavigate();
  const [formData] = useState(defaultFormData);

  const handleSubmit = (values) => {
    const stateForTransport = { type: "REQUEST_VIEW", payload: values };
    navigate("/creator", { state: stateForTransport });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Formik
            enableReinitialize={true}
            initialValues={formData}
            onSubmit={handleSubmit}
          >
            <Form id="brandform">
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
              <Field type="date" name="date" className="form-control mt-2" />
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

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { format } from "date-fns";

const defaultFormData = {
  influencer: "KINGSLEAGUE",
  brand: "Gatorade",
  date: format(new Date(), "yyyy-MM-dd"),
  request: "",
  mediaUrl: "",
};

export default function Brand(props) {
  const [formData] = useState(defaultFormData);

  const handleSubmit = (values) => {
    props.sendRequest(values);
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
              <Field
                type="text"
                name="mediaUrl"
                className="form-control mt-2"
                placeholder="Enter media url here"
              />
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

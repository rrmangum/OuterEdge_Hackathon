import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaArrowRight } from "react-icons/fa";
import SimpleBar from "simplebar-react";
import Image from "react-bootstrap/Image";
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Avatar from "../../assets/images/chat/lebron.jpg";
import Avatar2 from "../../assets/images/chat/cristiano.jpg";

export default function ChatLog() {
  const [key, setKey] = useState("All");
  const [query] = useState({ query: "" });

  return (
    <>
      <Card className="card-body message-list-card">
        <Tabs
          id="message-list"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="All" title="All">
            <SimpleBar>
              <Formik enableReinitialize={true} initialValues={query}>
                <Form>
                  <div className="wrapper-field">
                    <div className="icon-field">
                      <FaSearch />
                    </div>
                    <Field
                      type="text"
                      name="query"
                      className="form-control mb-2"
                      placeholder="     People, groups & messages"
                    />
                  </div>
                </Form>
              </Formik>
              <Col>
                <div
                  name="card-formats"
                  className="card-highlighted align-items-start mt-1 p-2"
                >
                  <Row>
                    <Col className="col-auto">
                      <a className="block-icon">
                        <Image
                          fluid={true}
                          roundedCircle={true}
                          className="object-fit-cover avatar-sm"
                          src={Avatar}
                        />
                        {true && (
                          <FaArrowRight className="fa-stack the-wrapper icon-tag" />
                        )}
                      </a>
                    </Col>
                    <Col>
                      <div className="w-100 overflow-hidden">
                        <h6 className="mt-0 mb-0 font-14">
                          <span className="float-end text-muted font-12">
                            {"6 hours ago"}
                          </span>
                          {"Lebron"}
                        </h6>
                        <p className="mt-1 mb-0 text-muted font-14">
                          <span className="w-75">
                            {"When you coming over, Lebron?"}
                          </span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  name="card-formats"
                  className="card-highlighted align-items-start mt-1 p-2"
                >
                  <Row>
                    <Col className="col-auto">
                      <a className="block-icon">
                        <Image
                          fluid={true}
                          roundedCircle={true}
                          className="object-fit-cover avatar-sm"
                          src={Avatar2}
                        />
                        {true && (
                          <FaArrowRight className="fa-stack the-wrapper icon-tag" />
                        )}
                      </a>
                    </Col>
                    <Col>
                      <div className="w-100 overflow-hidden">
                        <h6 className="mt-0 mb-0 font-14">
                          <span className="float-end text-muted font-12">
                            {"10 hours ago"}
                          </span>
                          {"Cristiano"}
                        </h6>
                        <p className="mt-1 mb-0 text-muted font-14">
                          <span className="w-75">
                            {"We still have that spot open!"}
                          </span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </SimpleBar>
          </Tab>
        </Tabs>
      </Card>
    </>
  );
}

import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const Result = () => {
    return <h3 variant="success">Your message has been successfully sent.</h3>;
  };

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_213bhh2",
        "template_gtrc7hm",
        e.target,
        "eD5p-FysYxMQcnvhb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div>
      <Form onSubmit={sendEmail}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Full Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Mobile No
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Mobile No"
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} required />
        </Form.Group>

        {/* <label>Message</label>
          <textarea name="message" /> */}
        {/*   
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" required/>
        </Col>
      </Form.Group> */}

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>

        <div className="row">{result ? <Result /> : null}</div>
      </Form>
    </div>
  );
};

export default ContactUs;

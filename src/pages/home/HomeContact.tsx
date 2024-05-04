import { Button, Col, Form, Row } from "react-bootstrap";
import emailImage from "../../assets/email.jpeg";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_MAIL_OPTIONS } = import.meta.env;

const HomeContact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { name, email, message } = e.target as any;
      const templateParams = {
        from_name: email.value,
        to_name: name.value,
        message: message.value,
        reply_to: email.value,
      };

      emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, templateParams, VITE_MAIL_OPTIONS).then(
        () => {
          Swal.fire({
            title: "",
            text: "Your Message Send Successfully",
            icon: "success",
            confirmButtonText: "OK",
            timer: 2000,
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            title: "",
            text: "Some Error Happened",
            icon: "error",
            confirmButtonText: "OK",
            timer: 2000,
          });
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="homeFrom mb-5">
      <div className="section-header">
        <h2 className="text-center fw-bold  my-5"> Contact Us </h2>
      </div>

      <Row className="align-items-center px-4 py-5">
        <Col md={6}>
          <img src={emailImage} alt="Email" className="img-fluid homeFromImage" />
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter Your Email Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control required as="textarea" rows={4} placeholder="Enter Your Message" />
            </Form.Group>
            <div className="d-flex ">
              <div className="ms-auto">
                <Button type="submit" disabled={loading} variant="primary">
                  {loading ? "Loading..." : "Send Message"}
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default HomeContact;

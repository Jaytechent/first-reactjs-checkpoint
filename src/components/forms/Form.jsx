import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./form.css";
function FormOne() {
  return (
    <>
      <Form className="form1">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Send us a message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button as="input" type="submit" value="Submit" />{" "}
    </>
  );
}

export default FormOne;

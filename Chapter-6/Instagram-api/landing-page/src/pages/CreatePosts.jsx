import { useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePosts() {
  const navigate = useNavigate();

  const titleField = useRef("");
  const descriptionField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onCreate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const userToCreatePayload = {
        title: titleField.current.value,
        description: descriptionField.current.value,
      };

      const createRequest = await axios.post(
        "http://localhost:2000/posts", userToCreatePayload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );

      const createResponse = createRequest.data;

      if (createResponse.status) navigate("/");
    } catch (err) {
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  return (
    <Container className="my-5">
      <h1 className="mb-3 text-center">Create Postingan</h1>
      <Form onSubmit={onCreate}>
        <Form.Group className="mb-3">
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            ref={titleField}
            placeholder="Masukkan nama"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            ref={descriptionField}
            placeholder="Masukkan Email"
          />
        </Form.Group>
        {errorResponse.isError && (
          <Alert variant="danger">{errorResponse.message}</Alert>
        )}
        <Button className="w-100" type="submit">
          Kirim
        </Button>
      </Form>
    </Container>
  )
}

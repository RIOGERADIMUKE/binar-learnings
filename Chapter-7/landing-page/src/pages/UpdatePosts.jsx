import { useEffect, useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePosts() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState([]);

    const titleField = useRef("");
    const descriptionField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onupdate = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const userToUpdatePayload = {
                title: titleField.current.value,
                description: descriptionField.current.value,
            };

            const updateRequest = await axios.put(
                `http://localhost:2000/posts/${id}`, userToUpdatePayload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            );

            const updateResponse = updateRequest.data;

            if (updateResponse.status) navigate("/");
        } catch (err) {
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    const getPosts = async () => {
        try {

            const responsePosts = await axios.get(`http://localhost:2000/api/posts/${id}`)

            const dataPosts = await responsePosts.data.data.getdata;

            setData(dataPosts)
            console.log(dataPosts);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    console.log(data);

    return (
        <Container className="my-5">
            <h1 className="mb-3 text-center">update Postingan</h1>
            <Form onSubmit={onupdate}>
                <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control
                        type="text"
                        ref={titleField}
                        defaultValue={data.title}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        type="text"
                        ref={descriptionField}
                        defaultValue={data.description}
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
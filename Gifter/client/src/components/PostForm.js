import React, { useState, useContext } from "react";
import { PostContext } from "../providers/PostProvider";
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  Col,
  Button,
} from "reactstrap";

const PostForm = () => {
  const { addPost, getAllPosts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userProfileId, setUserProfileId] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const post = { title, caption, imageUrl, userProfileId };

    addPost(post).then(getAllPosts);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="cards-column">
          <Card>
            <CardBody>
              <h3 className="text-center mb-3">Add Post</h3>
              <Form onSubmit={submit}>
                <FormGroup row>
                  <Col>
                    <Input
                      placeholder="User ID"
                      onChange={(e) => setUserProfileId(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Input
                      placeholder="Image URL"
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Input
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Input
                      placeholder="Caption"
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <Button type="submit" className="btn-block btn-info">
                  SUBMIT
                </Button>
              </Form>
            </CardBody>
          </Card>
          <div className="p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;

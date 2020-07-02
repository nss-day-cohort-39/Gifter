import React from "react";
import { Card, CardImg, CardBody, ListGroup, ListGroupItem } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <strong>{post.title}</strong>
        </p>
        <p>{post.caption}</p>
      </CardBody>
      <ListGroup flush>
        {post.comments.map((c) => (
          <ListGroupItem key={c.id} tag="p">
            {c.message}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Post;

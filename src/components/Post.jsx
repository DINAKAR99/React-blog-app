import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Button } from "reactstrap";
const Post = ({
  post = {
    posttitle: "This is default post title",
    postcontent: "This is default content",
  },
}) => {
  return (
    <Card className="border-0 shadow-sm mt-3">
      <CardBody>
        <h1>{post.posttitle}</h1>
        <CardText
          dangerouslySetInnerHTML={{
            __html: post.postcontent.substring(0, 60) + "....",
          }}
        ></CardText>
        <div>
          <Link className="btn btn-secondary" to={"/posts/" + post.postId}>
            Read More
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;

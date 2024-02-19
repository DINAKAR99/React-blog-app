import {
  Button,
  Card,
  CardBody,
  CardText,
  Container,
  Input,
  Row,
  Col,
} from "reactstrap";
import Base from "../components/base";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isloggedIn } from "../auth";
import { createComment, loadPostPostIdWise } from "../services/post-services";
const PostPage = () => {
  const { postId } = useParams();
  const [postt, setPostt] = useState({
    postid: 1,
    posttitle: "things about ai",
    postcontent: "ai advancement",
    imageName: "sssss",
    addedDate: "2024-02-05T16:55:57.172475",
    category: {
      categoryId: 1,
      categoryTitle: "ss",
      categoryDescription: "ssss",
    },
    comments: [
      {
        id: 1,
        content: "goodcomments",
      },
    ],
  });

  const [comment, setComment] = useState({
    content: "",
    post: { postId },
  });

  useEffect(() => {
    console.log("the param is ", postId);
    //load post of postId

    setComment({ ...comment, post: { postId: parseInt(postId) } });

    loadPostPostIdWise(postId)
      .then((data) => {
        console.log(data);
        setPostt(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading post");
      });
  }, []);

  // const printDate = (numbers) => {
  //   return new Date(numbers).toLocalDateString();
  // };

  const submitPost = () => {
    if (!isloggedIn()) {
      toast.error("Need to login first");
      return;
    }
    if (comment.content.trim() === "") {
      return;
    }

    createComment(comment, postId)
      .then((data) => {
        console.log(data);
        toast.success("comment added..");
        setPostt({
          ...postt,
          data,
        });
        setComment({
          content: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Base>
      <Container className="mt-4 border-0 shadow-sm">
        <Link to="/">Home</Link> /
        {postt && <Link to="">{postt.posttitle}</Link>}
        <Row>
          <Col
            md={{
              size: 12,
            }}
          >
            <Card className="mt-3 ps-2 border-0 shadow-sm">
              {postt && (
                <CardBody>
                  <CardText>
                    {/* Posted By<b>{postt.user.name}</b> on{" "} */}
                    <b>{postt.addedDate}</b>
                  </CardText>
                  <CardText>
                    <span className="text-muted">
                      {postt.category.categoryTitle}
                    </span>
                  </CardText>
                  <div
                    className="divider"
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#e2e2e2",
                    }}
                  ></div>
                  <CardText className="mt-3">
                    <h1>{postt.posttitle}</h1>
                  </CardText>
                  <div
                    className="image-container mt-4 shadow"
                    style={{ maxWidth: "50%" }}
                  >
                    <img
                      className="image-fluid"
                      src={BASE_URL + "/post/image/" + postt.imageName}
                    ></img>
                  </div>
                  <CardText
                    className="mt-5"
                    dangerouslySetInnerHTML={{ __html: postt.postcontent }}
                  ></CardText>
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col
            md={{
              size: 9,
              offset: 1,
            }}
          >
            <h3>Comments({postt ? postt.comments.length : 0})</h3>

            {postt &&
              postt.comments.map((c, index) => (
                <Card className="mt-4 border-0" key={index}>
                  <CardBody>
                    <CardText>{c.content}</CardText>
                  </CardBody>
                </Card>
              ))}
            <Card className="mt-2 border-0">
              <CardBody>
                <Input
                  type="textarea"
                  placeholder="Enter comment here"
                  value={comment.content}
                  onChange={(event) =>
                    setComment({ ...comment, content: event.target.value })
                  }
                ></Input>
                <Button onClick={submitPost} className="mt-2" color="primary">
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default PostPage;

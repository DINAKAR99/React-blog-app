import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import Base from "../components/base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-services";
import { toast } from "react-toastify";

const Singup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    role: "",
  });
  /////////////
  useEffect(() => {
    console.table(data);
  }, [data]);
  const [error, setError] = useState({
    error: {},
    isError: false,
  });
  ////////////////
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      role: "",
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (error.isError) {
      toast.error("form data is invalid,correct all details then submit ");
      setError({ ...error, isError: false });
      return;
    }
    console.log(data);
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("user is registered successfully !! user id " + resp.id);
        setData({
          name: " ",
          email: " ",
          password: " ",
          about: " ",
          role: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {JSON.stringify(data)}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Fill the information to register !!</h3>
              </CardHeader>
              <CardBody>
                {/*creating form*/}
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <label htmlFor="name">Enter Name</label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Enter Email</label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="password">Enter Password</label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="about">About</label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.about ? true : false}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="roles">ROLE : &nbsp; </label>
                    <Input
                      type="radio"
                      name="role"
                      onChange={(e) => handleChange(e, "role")}
                      value="ROLE_USER"
                    />
                    USER &nbsp;
                    <Input
                      type="radio"
                      name="role"
                      onChange={(e) => handleChange(e, "about")}
                      value="ROLE_ADMIN"
                    />
                    ADMIN
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Singup;

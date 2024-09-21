import AllPosts from "../components/AllPosts";
import CategorySideMenu from "../components/CategorySideMenu";
import CustomNavbar from "../components/CustomNavbar";
import NewFeed from "../components/NewFeed";
import Base from "../components/base";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Base>
      <CustomNavbar />
      <Container className="mt-3">
        <Row>
          <h1 className="text-center text-capitalize bg-danger-subtle p-5">
            hello welcome to home page
          </h1>
          <Col md={2} className="pt-5">
            {/* <CategorySideMenu /> */}
          </Col>
          <Col md={8}>{/* <AllPosts /> */}</Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Home;

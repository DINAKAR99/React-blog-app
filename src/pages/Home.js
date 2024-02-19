import CategorySideMenu from "../components/CategorySideMenu";
import CustomNavbar from "../components/CustomNavbar";
import NewFeed from "../components/NewFeed";
import Base from "../components/base";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={3}>
            <NewFeed />
          </Col>
        </Row>
      </Container>
      <CustomNavbar />
    </Base>
  );
};
export default Home;

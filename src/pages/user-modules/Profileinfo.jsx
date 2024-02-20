import React, { useContext, useEffect, useState } from "react";
import Base from "../../components/base";
import { userContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
import ViewUserprofile from "../../components/ViewUseProfile";
import { getUser } from "../../services/user-services";
import { Row, Col, Card, CardBody, Container, Table } from "reactstrap";
import { getCurrentUserDetail } from "../../auth";
function ProfileInfo() {
  const object = useContext(userContext);
  // const { userId } = useParams();
  const [user, setUser] = useState(null);
  const user1 = getCurrentUserDetail();

  useEffect(() => {
    getUser(user1.id).then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  const userView = () => {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card className="mt-2 border-0 rounded-0 shadow-sm">
            <CardBody>
              <h3 className="text-uppercase">User Information</h3>
              <Container className="text-center">
                <img
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                  src=""
                  alt="user profile picture"
                  className="img-fluid rounded-circle"
                />
              </Container>
              <Table
                responsive
                striped
                hover
                className="mt-5 text-center"
                bordered={true}
              >
                <tbody>
                  <tr>
                    <td>CGG BLOGS ID</td>
                    <td>CGG{user.id}</td>
                  </tr>
                  <tr>
                    <td>USER NAME</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>USER EMAIL</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>ABOUT</td>
                    <td>{user.about}</td>
                  </tr>
                  <tr>
                    <td>ROLE</td>
                    <td>{user.role}</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <ViewUserprofile user={user} />
        </Col>
      </Row>
    );
  };
  return <Base>{user ? userView() : "Loading User Data..."}</Base>;
}
export default ProfileInfo;

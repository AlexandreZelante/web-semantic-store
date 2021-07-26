/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="4">
            <Card className="card-upgrade login-form">
              <CardHeader className="text-center">
                <CardTitle tag="h4">Login</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="justify-content-center mb-2">
                  <Col lg="6" md="8">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input-lg mr-sm-2 form-control"
                      placeholder="Usuário"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col lg="6" md="8">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-lg mr-sm-2 form-control"
                      placeholder="Senha"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <input
                      type="submit"
                      className="btn bg-primary"
                      color="primary"
                      value="Entrar"
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;

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
import api from "../services/api";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  async function login() {
    api
      .post("/cliente/login", {
        username,
        password,
      })
      .then((response) => {
        console.log("response", response.data);
        history.push("/admin/lojas");
      })
      .catch((err) => {
        setHasError(true);
        console.log("err", err);
      });
  }

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
                {hasError && (
                  <p
                    className="justify-content-center mb-2 row"
                    style={{ color: "red" }}
                  >
                    Login ou senha incorretos
                  </p>
                )}
                <Row className="justify-content-center">
                  <Col>
                    <button
                      className="btn bg-primary"
                      color="primary"
                      value="Entrar"
                      onClick={() => login()}
                    >
                      Login
                    </button>
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

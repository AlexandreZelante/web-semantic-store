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
import React from "react";
//import Titulo from "components/Titulo/Titulo.js";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
// core components

function Loja() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="8" md="8" sm="10" className="mb-3">
            <h1>Loja</h1>
            <h2>Produtos sugeridos</h2>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-shop text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      {/* <p className="card-category">Nome Loja</p> */}
                      <CardTitle tag="p">Nome Produto</CardTitle>
                      {/*<p />*/}
                    </div>
                    <div className="stats">
                      <p>
                        <i className="nc-icon nc-tag-content" /> Categoria:
                      </p>
                      <p>
                        <i className="nc-icon nc-money-coins" /> Preço: R$ 1M
                      </p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />

                <Button
                  className="btn float-right mr-3"
                  type="submit"
                  color="primary"
                  href="/admin/concluido"
                  rel="noopener noreferrer"
                >
                  Adicionar
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="8" md="8" sm="10" className="mb-3 mt-5">
            <h2>Outros produtos</h2>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-shop text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      {/* <p className="card-category">Nome Loja</p> */}
                      <CardTitle tag="p">Nome Produto</CardTitle>
                      {/*<p />*/}
                    </div>
                    <div className="stats">
                      <p>
                        <i className="nc-icon nc-tag-content" /> Categoria:
                      </p>
                      <p>
                        <i className="nc-icon nc-money-coins" /> Preço: R$ 1M
                      </p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />

                <Button
                  className="btn float-right mr-3"
                  type="submit"
                  color="primary"
                  href="/admin/concluido"
                  rel="noopener noreferrer"
                >
                  Adicionar
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Loja;

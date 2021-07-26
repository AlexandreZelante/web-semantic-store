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

function Concluido() {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <Card className="card-upgrade">
              <CardHeader className="text-center">
                <CardTitle tag="h4">Pedido Concluído!</CardTitle>
                <p className="card-category">
                  Esperamos que tenha gostado! É uma honra poder atender você.
                </p>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
            <Button
              className="btn-round"
              color="primary"
              href="/"
              rel="noopener noreferrer"
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Concluido;

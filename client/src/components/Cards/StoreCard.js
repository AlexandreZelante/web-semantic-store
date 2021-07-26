import React from "react";
import {
  Col,
  Link,
  Card,
  CardBody,
  Row,
  CardTitle,
  CardFooter,
} from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

export default function StoreCard(props) {
  return (
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-shop text-warning" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              {/* <p className="card-category">Nome Loja</p> */}
              <CardTitle tag="p"> {props.nomeLoja} </CardTitle>
              {/*<p />*/}
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <p className="atividade">
            <i className="nc-icon nc-tag-content" /> Atividade: agricultura
          </p>
          <p className="localizacao">
            <i className="nc-icon nc-pin-3" /> Localização: aqui
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

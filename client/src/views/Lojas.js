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
import React, { useState, useEffect } from "react";
//import Titulo from "components/Titulo/Titulo.js";
// react plugin used to create charts
import { Link } from "react-router-dom";
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
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

import StoreCard from "components/Cards/StoreCard.js";

function Lojas() {
  const [stores, setStores] = useState([
    {
      type: "http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja",
      atividade: "Multicoisas",
      link: "https://www.americanas.com.br/",
      localizacao: "5B",
      nomeLoja: "Americanas",
    },
    {
      type: "http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja",
      atividade: "eletronicos",
      link: "https://www.kabum.com.br/",
      localizacao: "6A",
      nomeLoja: "Kabum",
    },
    {
      type: "http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja",
      atividade: "roupas",
      link: "https://www.renner.com.br/",
      localizacao: "6B",
      nomeLoja: "Renner",
    },
    {
      type: "http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja",
      atividade: "calçados",
      link: "https://www.sidewalk.com.br/",
      localizacao: "6C",
      nomeLoja: "Sidewalk",
    },
    {
      type: "http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja",
      atividade: "bebidas",
      link: "https://www.reidomate.com.br/",
      localizacao: "6D",
      nomeLoja: "Rei do Mate",
    },
  ]);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="10" md="10" sm="10" className="mb-3">
            <h1>Lojas</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="10" md="10" sm="10" className="mb-3">
            <form className="form-horizontal form-validate form-inline">
              <div className="form-group">
                <select class="form-control input-small mr-sm-2">
                  <option>Atividade</option>
                  <option>Nome</option>
                </select>

                <Input
                  className="input-small mr-sm-2"
                  placeholder="Nome da loja"
                />
              </div>

              {/* 
              <InputGroup className="">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
              </InputGroup> */}
              <Button
                className="btn"
                type="submit"
                color="primary"
                href="/"
                rel="noopener noreferrer"
              >
                <i className="nc-icon nc-zoom-split" /> Pesquisar
              </Button>
            </form>
          </Col>
          <Col lg="2" md="2" sm="2" className="mb-3">
            <Button
              className="btn btn-md float-right mr-3"
              id="ordericons"
              type="submit"
              color="danger"
              href="/"
              rel="noopener noreferrer"
            >
              <i className="bold nc-icon nc-minimal-down" />
            </Button>
          </Col>
        </Row>
        <Row>
          {stores.map(({ type, atividade, link, localizacao, nomeLoja }) => (
            <Col lg="4" md="6" sm="6">
              <Link to="/admin/loja">
                <StoreCard>
                  <CardTitle tag="p">{nomeLoja}</CardTitle>
                </StoreCard>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Lojas;

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
import { Link, useHistory } from "react-router-dom";
import api from "../services/api";
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
  const [stores, setStores] = useState([]);
  const [searchType, setSearchType] = useState("atividade");
  const [text, setText] = useState("");

  const history = useHistory();

  useEffect(() => {
    api.get("/lojas").then((response) => {
      setStores(response.data);
    });
  }, []);

  async function getLojas(e) {
    e.preventDefault();

    api
      .get("/lojas", {
        params: {
          [searchType]: text,
        },
      })
      .then((response) => {
        setStores(response.data);
      });
  }

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
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="form-control input-small mr-sm-2"
                >
                  <option value="atividade">Atividade</option>
                  <option value="nome">Nome</option>
                </select>

                <Input
                  className="input-small mr-sm-2"
                  placeholder="Escreva aqui"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <Button
                className="btn"
                type="submit"
                color="primary"
                rel="noopener noreferrer"
                onClick={getLojas}
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
          {stores.map((store) => (
            <Col lg="4" md="6" sm="6" key={store.id}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  history.push({
                    pathname: "/admin/loja",
                    state: {
                      store,
                    },
                  })
                }
              >
                <StoreCard store={store} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Lojas;

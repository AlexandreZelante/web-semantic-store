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
import { Line, Pie } from "react-chartjs-2";
import { useHistory } from "react-router-dom";
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

function Carrinho() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const carrinho = localStorage.getItem("carrinho");
    if (carrinho) {
      const produtos = JSON.parse(carrinho);
      console.log("produtos", produtos);
      api
        .post("/produtos/list", {
          produtos,
        })
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, []);

  function removeProductFromCart(product) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));

    if (carrinho && Array.isArray(carrinho)) {
      const filteredCarrinho = carrinho.filter(
        (idProduto) => idProduto !== product.id
      );

      console.log({ filteredCarrinho });
      localStorage.setItem("carrinho", JSON.stringify(filteredCarrinho));
    }

    const filteredProducts = products.filter(
      (stateProduct) => stateProduct.id !== product.id
    );
    setProducts(filteredProducts);

    // alert(`${product.nomeProduto} adicionado ao carrinho`);
  }

  function getSoma() {
    let valor = 0;

    products.forEach((product) => {
      const preco = parseInt(product.preco);
      valor += preco;
    });

    return valor;
  }

  function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    const total = String(getSoma());

    if (carrinho) {
      console.log("vai chamar com ", carrinho);
      api
        .post("/carrinho", {
          sub: "Carrinho",
          data: {
            produtos: carrinho,
            total,
          },
        })
        .then((response) => {
          localStorage.removeItem("carrinho");
          history.push("/admin/concluido", {
            idCarrinho: response.data.cartId,
          });
        })
        .catch(() => {
          history.push("/admin/concluido");
        });
    } else {
      history.push("/admin/concluido");
    }
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="8" md="8" sm="10" className="mb-3">
            <h1>Carrinho</h1>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
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
                        <CardTitle tag="p">{product.nomeProduto}</CardTitle>
                      </div>
                      <div className="stats">
                        <p>
                          <i className="nc-icon nc-tag-content" /> Categoria:{" "}
                          {product.categoria}
                        </p>
                        <p>
                          <i className="nc-icon nc-money-coins" /> Preço: R${" "}
                          {product.preco}
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
                    color="danger"
                    rel="noopener noreferrer"
                    onClick={() => removeProductFromCart(product)}
                  >
                    Remover
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="10" className="mb-3">
            <h3>{`Total: R$ ${getSoma()}`}</h3>
            <Button
              className="btn"
              type="submit"
              color="primary"
              onClick={() => finalizarCompra()}
              rel="noopener noreferrer"
            >
              Finalizar compra
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Carrinho;

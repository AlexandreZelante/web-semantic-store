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
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
//import Titulo from "components/Titulo/Titulo.js";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
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

function Loja() {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (location && location.state) {
      console.log("store", location.state.store);
      api
        .get("/produtos", {
          params: {
            idLoja: location.state.store.id,
          },
        })
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [location]);

  function addToCart(product) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));

    if (carrinho) {
      const hasId = carrinho.find((idProduto) => idProduto === product.id);
      if (!hasId) {
        carrinho.push(product.id);
      }
    } else {
      carrinho = [product.id];
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(`${product.nomeProduto} adicionado ao carrinho`);
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="8" md="8" sm="10" className="mb-3">
            <h1>Loja</h1>
            <h2>
              Produtos da loja{" "}
              {location && location.state && location.state.store.nomeLoja}
            </h2>
          </Col>
        </Row>
        <Row>
          {products.length === 0 && "Nenhum produto encontrado para esta loja"}
          {products.map((product) => (
            <Col lg="4" md="6" sm="6" key={product.id}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-bag-16 text-primary" />
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
                    color="primary"
                    rel="noopener noreferrer"
                    onClick={() => addToCart(product)}
                  >
                    Adicionar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Link to="/admin/carrinho">
            <Button
              className="btn float-right mr-3"
              type="submit"
              color="primary"
              rel="noopener noreferrer"
            >
              Ir para o carrinho
            </Button>
          </Link>
        </Row>
      </div>
    </>
  );
}

export default Loja;

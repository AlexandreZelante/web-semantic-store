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
/*eslint-disable*/
import React from "react";
import { Row, Col } from "reactstrap";
// used for making the prop types of this component
function Titulo(props) {
  const getBrand = () => {
    let brandName = "RDF Store";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };

  // {getBrand()}

  return (
    <Row>
      <Col lg="10" md="10" sm="10" className="mb-3">
        <h1>Lojas</h1>
      </Col>
    </Row>
  );
}

export default Titulo;

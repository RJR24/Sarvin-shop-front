import { useState } from "react";

import "./header-styles.css";
import UserAccountDropdown from "../User-account/UserAccountDropdown";
import UserBasketComponent from "../UserBasket/UserBasketComponent";

import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import techHeimLogo from "../../assets/images/icons/logo.svg";
import mobile from "../../assets/images/icons/mobile.svg";
import monitor from "../../assets/images/icons/monitor.svg";
import tabletEReader from "../../assets/images/icons/tablet-E-reader.svg";
import wearables from "../../assets/images/icons/wearables.svg";
import audio from "../../assets/images/icons/audio.svg";
import camera from "../../assets/images/icons/camera.svg";
import gaming from "../../assets/images/icons/gaming.svg";
import network from "../../assets/images/icons/network.svg";
import accessories from "../../assets/images/icons/accessories.svg";

function MobileNavScroll() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
        <Offcanvas className=" mw-75" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                src={techHeimLogo}
                className="mobile-logo"
                alt="tech Heim logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Products</Accordion.Header>
                <Accordion.Body className=" d-flex flex-column">
                  <ul className=" list-unstyled">
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={mobile} alt="mobile" /> Mobile Phones
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={monitor} alt="monitor" /> Laptops & Computers
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={tabletEReader} alt="tablet" /> Tablets &
                      E-reader
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={wearables} alt="wearables" /> Wearables
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={audio} alt="headphone" /> Audio
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={camera} alt="camera" /> Cameras
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={gaming} alt="gaming" /> Gaming
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={network} alt="network" /> Networking
                    </li>
                    <li className="  px-1 py-2 products-li ">
                      {" "}
                      <img src={accessories} alt="accessories" /> Accessories
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="mobile-menu-items">Blog</div>
            <div className="mobile-menu-items">FAQ</div>
            <div className="mobile-menu-items">Contact us</div>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand href="#" className=" fs-1 m-0">
          Tech Heim
        </Navbar.Brand>
        <div className="d-flex align-content-center justify-content-center">
          <UserBasketComponent />
          <UserAccountDropdown />
        </div>
      </Container>
      <Form className="d-flex w-100">
        <Form.Control
          type="search"
          placeholder="What can we help you to find ?"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar>
  );
}

export default MobileNavScroll;

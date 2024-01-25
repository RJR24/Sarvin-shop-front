import React, { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./footer-styles.css";

import facebookIcon from "../../../assets/images/icons/facebook.svg";
import facebookIconMobile from "../../../assets/images/icons/facebook-icon-mobile.svg";
import twitterIcon from "../../../assets/images/icons/twitter.svg";
import twitterIconMobile from "../../../assets/images/icons/twitter-icon-mobile.svg";
import instagramIcon from "../../../assets/images/icons/instagram.svg";
import instagramIconMobile from "../../../assets/images/icons/instagram-icon-mobile.svg";
import youtubeIcon from "../../../assets/images/icons/youtube.svg";
import youtubeIconMobile from "../../../assets/images/icons/youtube-icon-mobile.svg";
import masterCard from "../../../assets/images/icons/masterCard.svg";
import visaCard from "../../../assets/images/icons/Visa.svg";
import payPal from "../../../assets/images/icons/payPal.svg";
import amex from "../../../assets/images/icons/Amex.svg";
import copyRight from "../../../assets/images/icons/copy-right.svg";
import location from "../../../assets/images/icons/location.svg";
import HeimSupport from "../../../assets/images/icons/techHeimSupport.svg";
import phone from "../../../assets/images/icons/phone.svg";
import questionMark from "../../../assets/images/icons/question-message.svg";
import arrowUp from "../../../assets/images/arrows-btn-etc/arrow-circle-up.svg";

const Footer = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="footer-container">
          <div className=" container">
            <div class=" footer-info neutral-gray d-flex justify-content-between">
              <div className="footer-section1">
                <div className="c-title">Company</div>
                <span>about us</span>
                <span>blog</span>
                <span>returns</span>
                <span>order status</span>
              </div>
              <div className="footer-section2">
                <div className="c-title">Info</div>
                <span>How it works?</span>
                <span>our promises</span>
                <span>FAQ</span>
              </div>
              <div className="footer-section3">
                <div className="c-title">Contact us</div>
                <div className="d-flex align-items-center sec3-items">
                  <div>
                    <img src={location} alt="location" />
                  </div>
                  <div>
                    <span>123 Main Street, Anytown,USA</span>
                  </div>
                </div>
                <div className="d-flex align-items-center sec3-items">
                  <div>
                    <img src={phone} alt="phone" />
                  </div>
                  <div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="d-flex align-items-center sec3-items">
                  <div>
                    <img src={HeimSupport} alt="support" />
                  </div>
                  <div>
                    <span>TechHeimSupport@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="footer-section4 ">
                <div className="c-title">Sign up for News and updates</div>
                <div>
                  <input
                    className="E-address"
                    type="text"
                    placeholder="E-mail Address"
                  />
                </div>
                <div className="social-media d-flex ">
                  <img src={facebookIcon} alt="facebook icon" />
                  <img src={twitterIcon} alt="twitter icon" />
                  <img src={instagramIcon} alt="instagram icon" />
                  <img src={youtubeIcon} alt="youtube icon" />
                </div>
              </div>
            </div>
            <div className="acceptable-payment-cards d-flex">
              <img src={payPal} alt="payPal sign" />
              <img src={amex} alt="american express sign" />
              <img src={visaCard} alt="visa card sign" />
              <img src={masterCard} alt="master card sign" />
            </div>
            <div className="policy d-flex justify-content-between ">
              <div className="d-flex col-2 neutral-gray-cbcbcb">
                <span>
                  {" "}
                  <img src={copyRight} alt="" /> 2023 Tech Heim.{" "}
                </span>
              </div>
              <div className="right-side d-flex neutral-gray-cbcbcb">
                <span>cookie settings</span>
                <span>Privacy Policy</span>
                <span>Terms and Conditions </span>
                <span>Imprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block footer-container d-md-none">
        <div className=" w-100 text-white">
          <div className="footer-main-container">
            <div className="footer-dropdowns d-flex flex-column gap-3">
              <div className="chat-arrowUp d-flex align-items-center justify-content-between">
                <div className="chat d-flex justify-content-center align-items-center">
                  <img src={questionMark} alt="" />
                </div>
                <div className="chat d-flex justify-content-center align-items-center ">
                  <img src={arrowUp} alt="" />
                </div>
              </div>
              <div className="news-updates px-2 py-2  d-flex flex-start ">
                <div className="d-flex flex-column p-1 justify-content-center w-100">
                  <span className=" signUp-span d-flex justify-content-start">
                    Sign up for News and updates
                  </span>
                  <input
                    className="E-address w-100"
                    type="text"
                    placeholder="E-mail Address"
                  />
                </div>
              </div>
              <div className="company-accordion">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="footer-accordion-header">
                      Company{" "}
                    </Accordion.Header>
                    <Accordion.Body className=" d-flex flex-column">
                      <ul className=" list-unstyled">
                        <li className=" ">
                          <span>about us</span>
                        </li>
                        <li className=" ">
                          <span> blog</span>
                        </li>
                        <li className=" ">
                          <span>return</span>
                        </li>
                        <li className=" ">
                          <span>order status</span>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="footer-accordion-header">
                      Info
                    </Accordion.Header>
                    <Accordion.Body className=" d-flex flex-column">
                      <ul className=" list-unstyled">
                        <li className=" ">
                          <span>How it works?</span>
                        </li>
                        <li className=" ">
                          <span>our promises</span>
                        </li>
                        <li className=" ">
                          <span>FAQ</span>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="footer-accordion-header">
                      Contact us
                    </Accordion.Header>
                    <Accordion.Body className=" d-flex flex-column">
                      <ul className=" list-unstyled">
                        <li className=" ">
                          <img src={location} alt="location" /> 123 Main Street,
                          Anytown,USA
                        </li>
                        <li className=" ">
                          <img src={phone} alt="location" /> +1 (555) 123-4567
                        </li>
                        <li className=" ">
                          <img src={HeimSupport} alt="location" />{" "}
                          TechHeimSupport@gmail.com
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="contactUs-accordion"></div>
            </div>
            <div className="footer-cards-social container d-flex justify-content-between align-items-center py-2">
              <div className="cards d-flex ">
                <img src={payPal} alt="payPal" />
                <img src={amex} alt="American express card" />
                <img src={visaCard} alt="Visa card" />
                <img src={masterCard} alt="Master card" />
              </div>
              <div className="social d-flex gap-2">
                <img src={facebookIconMobile} alt="facebook" />
                <img src={twitterIconMobile} alt="twitter" />
                <img src={instagramIconMobile} alt="instagram" />
                <img src={youtubeIconMobile} alt="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

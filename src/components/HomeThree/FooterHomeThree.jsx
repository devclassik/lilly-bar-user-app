import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logonew.png";

function FooterHomeThree({ className }) {
  return (
    <>
      <section className={`appie-footer-area appie-footer-3-area ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget footer-about-widget-3">
                <div className="logo">
                  <a href="#">
                    <img src={logo} alt="" style={{ height: "120px" }} />
                  </a>
                </div>
                <p>VCCA is theme is the last theme you will ever have.</p>

                <div className="social mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <Link to="/news">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title">Support</h4>
                <ul>
                  <li>
                    <Link to="/about-us">Community</Link>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fal fa-envelope" /> vc.chatterdattorneys
                      @gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-phone" />
                      +234 8033 966 787
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" /> No 3 Indus Close,
                      Maitama, Abuja, NIGERIA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
              >
                <div className="copyright-text">
                  <p>Copyright © 2021 VCCA. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterHomeThree;

import React from 'react';

const ContactInfo = () => {
  return (
    <div className="col-md-4"><br />
      <div className="contact--info-area">
        <h3>Get in touch</h3>
        <p>
          Looking for help? Fill the form and start a new adventure.
        </p>
        <div className="single-info">
          <h5>Headquaters</h5>
          <p>
            <i className="fal fa-home"></i>
            No 3 Indus Close, Maitama, Abuja, NIGERIA
          </p>
        </div>
        <div className="single-info">
          <h5>Phone</h5>
          <p>
            <i className="fal fa-phone"></i>
            +234 8033 966 787
            <br />
          </p>
        </div>
        <div className="single-info">
          <h5>Support</h5>
          <p>
            <i className="fal fa-envelope"></i>
            vc.chatterdattorneys@gmail.com
          </p>
        </div>
        <div className="ab-social">
          <h5>Follow Us</h5>
          <a className="fac" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="twi" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="you" href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a className="lin" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

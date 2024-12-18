import React from "react";
import ContactInfo from "../ContactInfo";

function Forms() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <ContactInfo />
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                <form action="#" method="post" className="row">
                  <div className="col-md-6">
                    <input type="text" name="f-name" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="l-name" placeholder="Last Name" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="suject" placeholder="Subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bisylms-map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}

export default Forms;

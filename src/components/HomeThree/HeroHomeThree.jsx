import React, { useState } from "react";
import heroThumb from "../../assets/images/hero-thumb-4.png";
import PopupVideo from "../PopupVideo.jsx";

function HeroHomeThree() {
  const [showVideo, setVideoValue] = useState(false);
  const handleShowVideo = (e) => {
    e.preventDefault();
    setVideoValue(!showVideo);
  };
  return (
    <>
      {showVideo && (
        <PopupVideo
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
          handler={(e) => handleShowVideo(e)}
        />
      )}
      <section className="appie-hero-area appie-hero-3-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="appie-hero-content text-center">
                <h1 className="appie-title" style={{fontSize: '38px'}}>
                  VICTOR CHINWUBA CHATTERED ATTORNEYS
                </h1>
                <p>
                  Victor Chinwuba Chattered Attorneys is a full-service law firm
                  based in Nigeria. Our firm is dedicated to providing quality
                  legal services to our clients in a confidential and
                  cost-effective manner. We are a team of experienced and
                  knowledgeable attorneys who are committed to providing our
                  clients with the best possible legal representation. We have a
                  proven track record of success in a variety of legal matters.
                  Contact us today to schedule a consultation with one of our
                  attorneys.
                </p>
                <div
                  className="thumb mt-100 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="400ms"
                >
                  <img src={heroThumb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHomeThree;

import React, { useEffect, useState } from "react";
import "./DashboardHome.css";
import animalImg from "../../images/homeimgs/animalimg.jpg";
import forestImg from "../../images/homeimgs/forestimg.jpg";
import insectImg from "../../images/homeimgs/insectimg.jpg";
import personImg from "../../images/homeimgs/personimg.jpg";
import tribalImg from "../../images/homeimgs/tribalimg.jpg";


const images = [animalImg, forestImg, insectImg, personImg, tribalImg];

function DashboardHome() {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      {/* 🖼️ Image carousel */}
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          className={`banner_img${idx === current ? " active" : ""}`}
          alt={`banner-${idx}`}
        />
      ))}

      <div className="banner-content">
        <h1 className="text-white banner_heading">
          Trees are poems that the <br />
          earth writes upon the sky
        </h1>
        <p className="text-white banner_para">
          We're healing the Earth and uplifting local communities. Join the movement
        </p>

        <div className="banner-buttons">
          <a href="forcompanies/company.html">
            <button className="banner_btn">For Companies</button>
          </a>
          <a href="forIndividuals/indiv.html">
            <button className="banner_btn_ind banner_btn">For Individuals</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
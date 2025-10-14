import React, { useEffect, useState } from "react";
import "./DashboardHome.css";

const images = [
  "/images/homeimgs/animalimg.jpg",
  "/images/homeimgs/forestimg.jpg",
  "/images/homeimgs/insectimg.jpg",
  "/images/homeimgs/personimg.jpg",
  "/images/homeimgs/tribalimg.jpg",
];

function DashboardHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          className={`banner_img${idx === current ? " active" : ""}`}
          alt=""
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
        <a href="forcompanies/company.html">
          <button className="banner_btn">For companies</button>
        </a>
        <a href="forIndividuals/indiv.html">
          <button className="banner_btn_ind banner_btn">For Individuals</button>
        </a>
      </div>
    </div>
  );
}

export default DashboardHome;
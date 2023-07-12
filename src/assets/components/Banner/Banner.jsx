import React from "react";
import "./Banner.css";
import image from "../../../assets/chicken.jpg";

const Banner = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-row mt-10 justify-content-center"
    >
      <div
        style={{ paddingTop: "150px" }}
        className="text-black font-serif banner-image  mx-auto"
      >
        <h1 className="ps-5 title-shadow mt-5 text-[#192a56] font-bold text-5xl">
          Taste Indigenous Food
        </h1>
        <h1 className="ps-5 subtitle-shadow mt-3 text-green-600 font-semibold text-xl">
          Organic food
        </h1>
        <p className="pt-3 mt-1 pb-3 fs-5 ps-5">
          Discover the unique blend of spices and flavors <br />
          that make Bengali food so special, with our carefully curated <br />
          menu featuring the best dishes from the region.
        </p>
        <button
          style={{
            backgroundColor: "#192a56",
            color: "white",
            fontSize: "1.7rem",
            borderRadius: ".5rem",
            padding: ".8rem 3rem",
          }}
          className="mt-3 mb-5 fs-5 ms-5 hover:bg-[green]"
        >
          Explore More
        </button>
      </div>
      <div className="position-relative">
        <img className="w-[700px] h-[80vh] mr-12" src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="my-5 text-white banner-image w-75 mx-auto rounded">
      <h1 className="pt-5 fs-1 ps-5 ">
        Taste delicious <br /> traditional bengali <br /> food
      </h1>
      <p className="pt-3 pb-3 fs-5 ps-5">
        Discover the unique blend of spices and flavors that make Bengali food
        so special, <br /> with our carefully curated menu featuring the best
        dishes from the region.
      </p>
      <button className="btn btn-primary mt-1 mb-5 fs-5 ms-5">Explore More</button>
    </div>
  );
};

export default Banner;

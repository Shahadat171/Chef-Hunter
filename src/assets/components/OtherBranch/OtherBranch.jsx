import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaDollarSign,FaHeadset } from "react-icons/fa";
import aboutImage from "../../about.jpg";
import aboutImage2 from "../../about-removebg.png";
import aboutImage3 from "../../sandwitch.png";
import delivey from "../../icon/delivery2.png"

const OtherBranch = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shop")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);
  if (!shops.length) {
    return (
      <>
        <div className="text-center">
          <Spinner
            size={50}
            thickness={100}
            speed={100}
            color="#36ad47"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      </>
    );
  }
  return (
    <div className="flex gap-x-16 items-center justify-center mt-16 h-[100vh]">
      <div className="w-1/2">
        <img className="w-[65%] ml-auto" src={aboutImage2} alt="" />
      </div>
      <div className="w-1/2">
        {/* <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
        <i>Expert chefs</i>
      </h2> */}
        <h3 className="text-4xl tracking-wide text-left font-extrabold font-serif mb-7">
          <span className=" "><span className="text-green-600">About</span> Us</span>
        </h3>
        <h1 className="text-2xl tracking-wide font-extrabold font-serif mb-7">
          Why Choose us?
        </h1>
        <p className="text-justify w-2/3">
          Experience the authentic flavors of Bengal at our restaurant. Our
          passionate team crafts dishes that highlight the vibrant spices and
          rich traditions of Bengali cuisine. From aromatic curries to
          delightful sweets, each dish features locally sourced ingredients,
          supporting our community. Join us for a memorable dining experience
          and savor the distinctive taste of Bengal.
        </p>
        <div className="flex gap-x-5 mb-2 mt-3 font-sans ">
           <div className="btn rounded mt-2  flex items-center justify-center  border-2 shadow-sm"><img src={delivey} className="h-7" />Free Delivery</div>
           <div className="btn rounded mt-2"><FaDollarSign className="h-7 text-green-600"/> Easy Payments</div>
           <div className="btn rounded mt-2"><FaHeadset className="h-8 w-6 text-green-600"/>24/7 Service</div>
        </div>
        <button className="btn mt-3 font-sans btn-primary bg-[#192a56] tracking-wider normal-case">Order Now</button>
      </div>
    </div>
    // <div>
    //   <h2 className="text-center my-5 mx-auto ">Explore our other outlet</h2>
    //   <hr className="w-75 mx-auto" />
    //   <div className="w-75 mx-auto mt-2 mb-5">
    //     <div className="row row-cols-1 row-cols-md-2 g-4">
    //       {shops.map((shop) => (
    //         <div className="col">
    //           <div className="card shadow">
    //             <img
    //               src={shop.image}
    //               className="card-img-top"
    //               style={{ height: "350px" }}
    //               alt="..."
    //             />
    //             <div className="d-flex justify-content-between">
    //               <div className="d-flex  align-items-center">
    //                 <FaLocationArrow className="mx-1"></FaLocationArrow>
    //                 <h3 className="ms-1">{shop.brancName}</h3>
    //               </div>
    //               <button className="btn btn-primary">Vist Us</button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default OtherBranch;

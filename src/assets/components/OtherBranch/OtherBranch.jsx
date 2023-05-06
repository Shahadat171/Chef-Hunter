import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaLocationArrow } from "react-icons/fa";


const OtherBranch = () => {
    const [ shops, setShops ] = useState([])
    useEffect(()=>{
        fetch("https://assignment-10-server-teal-nine.vercel.app/shop")
        .then(res => res.json())
        .then(data => setShops(data))
    },[])
    if(!shops.length){
      return <>
      <div className="text-center">
      <Spinner size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
      </div>
      </>
    }
  return (
    <div>
        <h2 className="text-center my-5 mx-auto ">Explore our other outlet</h2>
        <hr className="w-75 mx-auto" />
      <div className="w-75 mx-auto mt-2 mb-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {shops.map(shop =>(
            <div className="col">
            <div className="card shadow">
              <img src={shop.image}className="card-img-top"style={{height: '350px'}} alt="..." />
              <div className="d-flex justify-content-between">
                <div className="d-flex  align-items-center">
                <FaLocationArrow className="mx-1"></FaLocationArrow><h3 className="ms-1">{shop.brancName}</h3>
                </div>
                <button className="btn btn-primary">Vist Us</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherBranch;

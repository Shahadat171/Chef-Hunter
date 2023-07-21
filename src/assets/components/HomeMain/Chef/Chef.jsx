import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../../chefs/image1.jpg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { GoThumbsup } from "react-icons/go";

const Chef = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-teal-nine.vercel.app/Chef")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  if (!chef.length) {
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
    <div className=" w-75 mx-auto">
      <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
        <i>Expert chefs</i>
      </h2>
      <h3 className="text-4xl tracking-wide font-extrabold font-serif text-center mb-20">
        Meet Our Experts Chefs
      </h3>

      <div>
        <div className="grid grid-cols-3 gap-x-20 gap-y-7">
          {chef.map((everyChef) => (
            <div className="card w-[400px] font-serif bg-base-100 shadow-xl">
              <figure>
                <img
                  src={everyChef.chefPicture}
                  className="h-80 w-full"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex flex-col items-center justify-center">
                <Rating
                  className="h-6"
                  style={{ maxWidth: 140 }}
                  value={3}
                  readOnly
                />
                <h1 className="card-title mb-1">{everyChef.chefName}</h1>
                {/* <Rating count="3" color="yellow" className="my-rating-component"></Rating> */}
                <div className="flex gap-x-4 text-[17px] mb-2 mt-0 pt-0 items-center justify-between">
                  <h2>
                    {" "}
                    Recipes :{" "}
                    <span className="font-mono">
                      {everyChef.numberOfRecipes}
                    </span>
                  </h2>
                  {/* BsFillHandThumbsU */}

                  <h2 className="flex items-center justify-center">
                    <GoThumbsup className="mr-1 text-[#192a56]"></GoThumbsup> :{" "}
                    <span className="font-mono ml-1">{everyChef.likes}</span>
                  </h2>
                  <h2>
                    Experience :{" "}
                    <span className="font-mono">
                      {everyChef.yearsOfExperience}
                    </span>
                    y
                  </h2>
                </div>
                <div className="flex gap-x-14 items-center justify-between">
                  <div className="card-actions justify-end">
                    <Link to={`/chef/${everyChef.id}`}>
                      <button className="btn btn-primary bg-[#192a56] normal-case tracking-wider">
                        View Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;

import React, { useEffect, useState } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Chef = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-teal-nine.vercel.app/Chef")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className=" w-75 mx-auto mt-5 pt-5">
      <h3 className="mb-2 text-center">
        Choose dishes and recipes from our Master Chefs
      </h3>
      <hr className="mb-4" />
      <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {chef.map((everyChef) => (
          <div className="col bg-white shadow-lg p-3 rounded">
            <div className="card text-bg-success">
              <img
                src={everyChef.chefPicture}
                style={{ height: "225px" }}
                className="card-img-top img-fluid"
              />
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5 className="card-title">{everyChef.chefName}</h5>
                  <h6 className="card-title">
                    Available Recipes : {everyChef.numberOfRecipes}
                  </h6>
                </div>
                <div>
                  <h5 className="card-title">
                    Experience : {everyChef.yearsOfExperience}y
                  </h5>
                  <h6 className="card-title ">
                    <BsFillHandThumbsUpFill className="text-white-50">
                    </BsFillHandThumbsUpFill>
                    Like : {everyChef.likes}
                  </h6>
                </div>
              </div>
              <div class="card-footer px-0 mx-0 py-0 my-0">
              <Link to={`/chef/${everyChef.id}`}>
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="btn btn-secondary btn-lg "
                >
                  View Recipes
                </button>
                </Link>
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

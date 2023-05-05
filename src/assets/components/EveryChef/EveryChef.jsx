import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const EveryChef = () => {
  const Chef = useLoaderData();
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    recipe,
    description,
  } = Chef;
  return (
    <div className="card mx-auto border border-0" style={{width: '65rem'}}>
    <div className="d-flex  mx-auto my-5 py-5 px-4 bg bg-primary-subtle">
      <div className="text-center card bg-body-tertiary shadow p-3 pb-1 me-4">
        <h5>{chefName}</h5>
          <h6>Recipe: {numberOfRecipes}</h6>
          <h6>Experiance:{yearsOfExperience}</h6>
          <h6>
            <BsFillHandThumbsUpFill className=""></BsFillHandThumbsUpFill>
            Like : {likes}
          </h6>
          <p style={{textAlign: 'justify'}}>{description}</p>
      </div>
      <div>
        <img
          className="rounded shadow "
          style={{ height: "360px", width: "500px" }}
          src={chefPicture}
          alt=""
        />
      </div>
    </div>
    </div>
  );
};

export default EveryChef;

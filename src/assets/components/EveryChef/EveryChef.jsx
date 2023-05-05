import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillFileEarmarkRichtextFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { Rating } from "@mui/material";
import './EveryChef.css'


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
  const [recipe1, recipe2, recipe3] = recipe;
  console.log(recipe1)
  
  console.log(recipe1.name, recipe1.ingredients, recipe1.ratings, recipe1.cookingMethod)
  return (
    <div>
      <div className="card mx-auto border border-0" style={{ width: "65rem" }}>
        <div className="d-flex  mx-auto my-5 py-5 px-4 bg bg-primary-subtle">
          <div className="text-center card bg-body-tertiary shadow p-3 pb-1 me-4">
            <h5>{chefName}</h5>
            <h6>Recipe: {numberOfRecipes}</h6>
            <h6>Experiance:{yearsOfExperience}</h6>
            <h6>
              <BsFillHandThumbsUpFill className=""></BsFillHandThumbsUpFill>
              Like : {likes}
            </h6>
            <p style={{ textAlign: "justify" }}>{description}</p>
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
      <div>
        <h2 className="text-center">Some recipes of {chefName}</h2>
        <div>
          <hr className="horizontal-ruler mx-auto" />
          <div className="d-flex justify-content-center margin ">
            <div className="item border  shadow">
              <h5 className="text-center">{recipe1.name}</h5>
              <div>
                <h6 className="text-center">Ingredients:</h6>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe1.ingredients[0]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe1.ingredients[1]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe1.ingredients[2]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe1.ingredients[3]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe1.ingredients[4]}
                </li>
              </div>
              <h6>How to cook?</h6>
              <p>{recipe1.cookingMethod}</p>
              <p>
             <Rating
              name="half-rating-read" defaultValue={recipe1.ratings} precision={0.5}  readOnly 
             ></Rating>
             </p>
            </div>
            <div>
            <div className="item shadow">
              <h5 className="text-center">{recipe2.name}</h5>
              <div>
                <h6 className="text-center">Ingredients:</h6>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe2.ingredients[0]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe2.ingredients[1]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe2.ingredients[2]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe2.ingredients[3]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe2.ingredients[4]}
                </li>
              </div>
              <h6>How to cook?</h6>
              <p>{recipe2.cookingMethod}</p>
              <p>
             <Rating
              name="half-rating-read" defaultValue={recipe2.ratings} precision={0.5}  readOnly 
             ></Rating>
             </p>
            </div>
            </div>
            <div>
            <div className="item shadow">
              <h5 className="text-center">{recipe3.name}</h5>
              <div>
                <h6 className="text-center">Ingredients:</h6>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe3.ingredients[0]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe3.ingredients[1]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe3.ingredients[2]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe3.ingredients[3]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {recipe3.ingredients[4]}
                </li>
              </div>
              <h6>How to cook?</h6>
              <p>{recipe3.cookingMethod}</p>
              <p>
             <Rating
              name="half-rating-read" defaultValue={recipe3.ratings} precision={0.5}  readOnly 
             ></Rating>
             </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryChef;

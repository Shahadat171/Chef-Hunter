import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BsFillFileEarmarkRichtextFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import menu from "../../icon/menu.png";

import "./EveryChef.css";
import "react-toastify/dist/ReactToastify.css";
import EveryChefRecipe from "../EveryChefRecipe/EveryChefRecipe";
import { GoThumbsup } from "react-icons/go";
import { FaBookmark, FaSave, FaUtensils } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

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
    <div>
      <div className="h-[100vh]">
        <div className="w-full flex items-center justify-center">
          <div className="card rounded bg-gray-50 lg:card-side  shadow-xl border-0 mt-28 max-w-[1200px] mx-auto">
            <figure className="w-[45%]">
              <img className="h-full" src={chefPicture} alt="Album" />
            </figure>
            <div className="card-body ml-12">
              <h2 className="card-title font-serif text-3xl text-[#192a56]">
                {chefName}
              </h2>
              {/*https://assignment-10-server-teal-nine.vercel.app */}
              {/* http://localhost:5000 */}
              <Rating
                className="h-6"
                style={{ maxWidth: 140 }}
                value={3}
                readOnly
              />
              <div className="flex w-5/6 mt-2 font-serif text-xl items-center justify-start font-bold">
                <p className="flex justify-start items-center">
                  <img className="h-8 w-8 mr-2" src={menu} alt="" /> Recipe :{" "}
                  <span className=" font-sans ml-1"> {numberOfRecipes} </span>
                </p>
                <p className="flex justify-start items-center">
                  <GoThumbsup className="mr-1 text-green-600"></GoThumbsup> :{" "}
                  <span className="font-mono ml-1"> {likes}</span>
                </p>
                <p className=" text-left">
                  Experiance :{" "}
                  <span className="font-mono ml-1"> {yearsOfExperience}</span>y
                </p>
              </div>
              <p className="w-[500px] text-justify font-serif font-medium tracking-wider">
                {description}
              </p>
              <div className="w-48 ml-0">
                <button class="bg-[#192a56] flex ml-0 justify-center items-center gap-x-2 font-sans hover:bg-[#4A07DA] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-none">
                  <FaBookmark className=" text-green-600"></FaBookmark> Save now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
            <i>Best Dishes</i>
          </h2>
          <h3 className="text-4xl tracking-wide font-extrabold font-serif text-center mb-20">
            {chefName} Dishes
          </h3>
        </div>
      </div>
      <div class="p-10 h-[100vh]">
        {/* <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
        <i>Best Dishes</i>
      </h2>
      <h3 className="text-4xl tracking-wide font-extrabold font-serif text-center mb-20">
        Our Best Dishes
      </h3> */}
        {/* <!--Card 1--> */}
        <div>
          {/* <h2 className="text-center">Some recipes of {chefName}</h2> */}
          <div>
            {/* <hr className="horizontal-ruler mx-auto" /> */}
            <div className="flex justify-between mx-20 gap-x-7">
              {recipe.map((inividualRecipe) => (
                <EveryChefRecipe
                  everyRecipe={inividualRecipe}
                ></EveryChefRecipe>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryChef;

import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-teal-nine.vercel.app/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  return (
    <div className="mt-8 mb-28">
      <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
        <i>Best Dishes</i>
      </h2>
      <h3 className="text-4xl tracking-wide font-extrabold font-serif text-center mb-20">
        Our Best Dishes
      </h3>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {dishes.map((dish) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full h-64"
                src={dish.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 pt-2 flex flex-col justify-center items-center">
                <div class="font-bold text-xl mb-2">{dish.name}</div>
                <p class="text-gray-700 text-base mb-1 mt-1 flex items-center">
                  <FaDollarSign className=" text-green-600" /> Price :{" "}
                  {dish.price}
                </p>
                <Rating
                  className="h-5 my-1"
                  style={{ maxWidth: 110 }}
                  value={3}
                  readOnly
                />
              </div>
              <div class="px-6 pt-3 pb-3 flex flex-col justify-center items-center">
                <button class="bg-[#192a56]  mx-auto font-sans hover:bg-[#4A07DA] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-none">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dishes;

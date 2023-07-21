import React, { useState } from "react";
import { Rating } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const EveryChefRecipe = ({ everyRecipe }) => {
  const [disable, setDisable] = useState(false);
  const notify = () => {
    toast("Recipe is your favorite");
    setDisable(true);
  };
  console.log(everyRecipe);
  return (
    // <div class="max-w-sm w-96 rounded overflow-hidden shadow-lg">
    //   <img class="w-full" src={everyRecipe.image} alt="Mountain" />
    //   <div class="px-6 py-4">
    //     <div class="card-title font-mono tracking-wider text-[#192a56] text-xl mb-2">
    //       {everyRecipe.name}
    //     </div>
    //     <Tabs.Group
    //       // aria-label="Full width tabs"
    //       className="w-full"
    //     >
    //       <Tabs.Item active title="Method">
    //         <p className="  text-justify font-serif font-medium tracking-wide text-gray-800 dark:text-white">
    //           {everyRecipe.cookingMethod}
    //         </p>
    //       </Tabs.Item>
    //       <Tabs.Item className="w-1/2" title="Ingredients">
    //         <p className="  text-justify font-serif font-medium tracking-wide text-gray-800 dark:text-white">
    //           {everyRecipe.ingredients}
    //         </p>
    //       </Tabs.Item>
    //     </Tabs.Group>
    //   </div>
    //   <div className="mx-auto">
    //     <button
    //       disabled={disable}
    //       onClick={notify}
    //       className="btn btn-secondary w-2/3 mx-auto"
    //     >
    //       Favourite
    //     </button>
    //     <ToastContainer></ToastContainer>
    //   </div>
    // </div>
    <div className="card w-[500px] bg-base-100 shadow-xl">
      <figure>
        <img src={everyRecipe.image} className=" h-72 w-full" alt="Shoes" />
      </figure>
      <div className="card-body gap-0 pb-3 pt-3">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{everyRecipe.name}</h2>
          <Rating
            className="h-6"
            style={{ maxWidth: 140 }}
            value={3}
            readOnly
          />
        </div>
        <Tabs.Group
          // aria-label="Full width tabs"
          className="w-full pb-0 mb-0"
        >
          <Tabs.Item active title="Method">
            <p className="text-justify font-serif text-gray-800 dark:text-white">
              {everyRecipe.cookingMethod}
            </p>
          </Tabs.Item>
          <Tabs.Item className="w-1/2" title="Ingredients">
            <p className="  text-justify font-serif font-medium tracking-wide text-gray-800 dark:text-white">
              {everyRecipe.ingredients}
            </p>
          </Tabs.Item>
        </Tabs.Group>
        <div className="card-actions mt-0 justify-end">
          <button disabled={disable} onClick={notify} className="bg-[#192a56] mt-0 mx-auto font-sans hover:bg-[#4A07DA] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-none">Favourite</button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default EveryChefRecipe;

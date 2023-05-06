import React, { useState } from 'react';
import { Rating } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

const EveryChefRecipe = ({everyRecipe}) => {
    const [disable, setDisable] = useState(false);
    const notify = () =>{
        toast("Recipe is your favorite");
        setDisable(true);
      }
    console.log(everyRecipe)
    return (
             <div className="item border  shadow">
              <h5 className="text-center">{everyRecipe.name}</h5>
              <div>
                <h6 className="text-center">Ingredients:</h6>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {everyRecipe.ingredients[0]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {everyRecipe.ingredients[1]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {everyRecipe.ingredients[2]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {everyRecipe.ingredients[3]}
                </li>
                <li className="text-center" style={{ listStyleType: "none" }}>
                  {everyRecipe.ingredients[4]}
                </li>
              </div>
              <h6>How to cook?</h6>
              <p>{everyRecipe.cookingMethod}</p>
              <p>
             <Rating
              name="half-rating-read" defaultValue={everyRecipe.ratings} precision={0.5}  readOnly 
             ></Rating>
             </p> <br />
             <button disabled={disable} onClick={notify}  style={{width: "100%"}} className="btn btn-primary">Favourite</button>
             <ToastContainer></ToastContainer>
            </div>
    );
};

export default EveryChefRecipe;
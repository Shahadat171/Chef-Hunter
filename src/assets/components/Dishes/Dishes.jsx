import React, { useEffect, useState } from 'react';

const Dishes = () => {
    const [dishes , setDishes] = useState([]) 
    useEffect(()=>{
        fetch('https://assignment-10-server-teal-nine.vercel.app/dishes')
        .then(res => res.json())
        .then(data=> setDishes(data))
    },[])
    return (
        <div className='my-5'>
            <h2 className='text-center pt-5' >Try some of our <br /> extraordinary dishses</h2>
            <hr className='w-75 mx-auto' />
        <div className='card-group w-75 mx-auto my-3'>
            {dishes.map(dish =>(
                <div className="card me-3 shadow rounded">
                <img src={dish.image} className="card-img-top" style={{height: '250px'}} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{dish.name}</h5>
                  <p className="card-text">{dish.description}</p>
                </div>
                <div className="card-footer">
                 <button className='btn btn-primary' style={{width: "100%"}}>Order Now</button>
                </div>
              </div>
            ))}
        </div>
        </div>
    );
};

export default Dishes;
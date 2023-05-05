import React from 'react';

const Shop = ({shop}) => {
    console.log(shop)
    return (
        <div>
            <h1>{shop.branchName}</h1>
        </div>
    );
};

export default Shop;
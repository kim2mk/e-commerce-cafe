import React from "react";
import { PRODUCTS } from "../products";
import Product from "./Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <FontAwesomeIcon className="icon" icon={faCoffee} />
        <h1>Drink Menu</h1>
      </div>
      <div className="products">
        {""}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

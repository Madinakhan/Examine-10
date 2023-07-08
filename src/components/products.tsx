import React, { Component } from "react";
import { Product } from "../types";

interface ProductsProps {
  products: Product[];
}

export default class Products extends Component<ProductsProps> {
  render() {
    const { products } = this.props;
    return (
      <div className="w-[80%] products-container">
        <div className="product-nav">
          <div>{products.length} Products Found</div>
          <div className="line"></div>
          <div>Sort By</div>
          <div>
            <select name="sort" id="sort" aria-label="State">
              <option value="">price (lowest)</option>
              <option value="">price (highest)</option>
              <option value="">name (a-z)</option>
              <option value="">name (z-a)</option>
            </select>
          </div>
        </div>

        <div className="products">
          {products.length == 0 ? (
            <h3 className="text-red-500">Products not found</h3>
          ) : (
            products.map(({ id, title, price, thumbnail }) => (
              <div
                key={id}
                className="product"
              >
                <div className="product-img">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="product-text">
                  <p>{title}</p>
                  <span>${price}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

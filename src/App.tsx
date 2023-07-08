import React, { Component } from "react";
import { Menu, } from "./components";
import Products  from "./components/products";
import axios from "axios";
import { Product, baseUrl } from "./types";

interface AppState {
  categoryName: string;
  products: Product[];
}

export default class App extends Component<{}, AppState> {
  state = {
    categoryName: "all",
    products: [],
  };
  handleSelect = (categoryName: string) => {
    this.setState({ categoryName });
  };
  getProducts = async () => {
    const { data } = await axios.get(`${baseUrl}/products`);
    this.setState({ products: data.products });
    console.log(data.products);
  };
  componentDidMount(): void {
    this.getProducts();
  }
  render() {
    const { categoryName, products } = this.state;
    const filteredCategories =
      categoryName === "all"
        ? products
        : products.filter((p: Product) => p.category === categoryName);

    return (
      <div className="w-[100%] h-fit flex p-[50px]">
        <Menu onSelect={this.handleSelect} />
        <Products products={filteredCategories} />
      </div>
    );
  }
}

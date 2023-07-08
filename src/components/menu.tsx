import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../types";

interface MenuState {
  categories: string[];
}

interface MenuProps {
  onSelect: (categoryName: string) => void;
}

export default class Menu extends Component<MenuProps, MenuState> {
  state = {
    categories: [],
  };
  getMenus = async () => {
    const { data } = await axios.get(`${baseUrl}/products/categories`);
    this.setState({ categories: data });
    console.log(data);
  };
  componentDidMount(): void {
    this.getMenus();
  }
  render() {
    const { categories } = this.state;
    return (
      <div className="w-[20%] menu-container">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          aria-label="Search"
        />
        <b>Category</b>
        <ul className="categories">
          <li className="active" onClick={() => this.props.onSelect("all")}>
            All
          </li>
          {categories.map((c, idx) => (
            <li key={idx} onClick={() => this.props.onSelect(c)}>
              {c}
            </li>
          ))}
        </ul>
        <b>Price</b>
        <p>$0.00</p>
        <div>
          <input type="range" aria-label="Search" />
        </div>
        <button className="btn btn-danger">Clear Filters</button>
      </div>
    );
  }
}

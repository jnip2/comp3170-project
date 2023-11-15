import React from "react";

import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="lib__container">
        <div className="lib__sort">
          <h3 className="lib__sort_title">Library</h3>
          <label>
            Sort By: 
            <select>
              <option>All</option>
              <option>Recent</option>
              <option>Shuffle</option>
            </select>
          </label>
        </div>
        <button className="lib__btn">Add</button>
      </div>
      <BookList />
    </div>
  );
}

import React from "react";
import data from "../../data.json";
import sortingHatImg from "../assets/sorting_hat.png";
import '../styles/ResultsComponent.css';

function ResultsComponent({ userName, houseIndex }) {
  return (
    <div className="results-container">
        <div className="sortinghat-container">
            <img src={sortingHatImg} />
        </div>
        <h3 style={{ textAlign: "center" }}>Congratulations {userName}, you have been sorted into {data.houses[houseIndex].housename}</h3>
        <p>{data.houses[houseIndex].description}</p>
  </div>
  );
}

export default ResultsComponent;

import React from "react";
import "./App.css";
import data from "./data.json";

export const App = () => {
  return (
    <div className="app">
      <h1>Computer Science</h1>
      {data.map((item, i) => {
        const theme = item.details;
        return (
          <details key={item.id}>
            <summary>
              {i + 1}.{item.title}
            </summary>
            <ol>
              {theme.map((item, index) => {
                return (
                  <li key={index}>
                    {i + 1}.{index + 1}. {item}
                  </li>
                );
              })}
            </ol>
          </details>
        );
      })}

      <h3>
        <span>Algoritm ta'lim</span>
        <i>All rights reserved © 2021 - {new Date().getFullYear()}</i>
      </h3>
    </div>
  );
};

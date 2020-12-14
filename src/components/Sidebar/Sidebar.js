import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";
import { LightbulbOff, LightbulbOn } from "../Icons/Lightbulb.js"

/**
 * Sidebar, with an icon for each subpage in this app. 
 * Each icon has its own link. The Sidebar can have items from top to bottom and icons from bottom to top.
 */
export default function Sidebar(props) {
  let lightbulb;
  if (localStorage.getItem("theme") === "hell") {
    lightbulb = <LightbulbOff />;
  } else {
    lightbulb = <LightbulbOn />;
  }

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <span className="link-text logo-text">Übersicht</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/gearview" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M512 400v32a16 16 0 0 1-16 16H32a32 32 0 0 1-32-32V80a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v304h432a16 16 0 0 1 16 16z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M464 320H346c-21.38 0-32.09-25.85-17-41l32.4-32.4-73.4-73.35-73.37 73.38a32 32 0 0 1-45.25 0l-68.69-68.69a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L192 178.75l73.38-73.38a32 32 0 0 1 45.25 0l96 96L439 169c15.12-15.12 41-4.41 41 17v118a16 16 0 0 1-16 16z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Gear</span>
          </Link>
        </li>

        <li className="nav-item" onClick={(event) => props.onClickRefresh(event)}>
          <Link to="/" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="space-shuttle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M8 454.06V320a24 24 0 0 1 24-24h134.06c21.38 0 32.09 25.85 17 41l-41.75 41.75A166.82 166.82 0 0 0 256.16 424c77.41-.07 144.31-53.14 162.78-126.85a12 12 0 0 1 11.65-9.15h57.31a12 12 0 0 1 11.81 14.18C478.07 417.08 377.19 504 256 504a247.14 247.14 0 0 1-171.31-68.69L49 471c-15.15 15.15-41 4.44-41-16.94z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M12.3 209.82C33.93 94.92 134.81 8 256 8a247.14 247.14 0 0 1 171.31 68.69L463 41c15.12-15.12 41-4.41 41 17v134a24 24 0 0 1-24 24H345.94c-21.38 0-32.09-25.85-17-41l41.75-41.75A166.8 166.8 0 0 0 255.85 88c-77.46.07-144.33 53.18-162.79 126.85A12 12 0 0 1 81.41 224H24.1a12 12 0 0 1-11.8-14.18z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Aktualisieren</span>
          </Link>
        </li>

        <li className="nav-item" onClick={(event) => props.onClick(event)}>
          <div className="nav-link">
            {lightbulb}
            <span className="link-text">Farbschema</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};


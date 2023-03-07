import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkToggle, setDarkToggle] = React.useState(false);
  return (
    <div className="Header">
      <div className="header-lft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="header-rt">
        <div className="theme-btn">
          <div
            class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${
              darkToggle && "dark"
            }`}
          >
            <label class="toggleDarkBtn">
              <input
                type="checkbox"
                onClick={() => setDarkToggle(!darkToggle)}
              />
              <span class="slideBtnTg round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

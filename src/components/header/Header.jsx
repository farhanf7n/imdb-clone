import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkToggle, setDarkToggle] = React.useState(false);
  return (
    <div className="Header py-4 dark:bg-black">
      <div className="container mx-auto">
        <div className="nav-wrap flex items-center justify-between">
          <div className="header-lft flex items-center">
            <Link to="/">
              <img
                className="header__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                alt=""
              />
            </Link>
            <Link to="/movies/popular">
              <span className="font-bjpReg font-semibold text-base dark:text-white">
                Popular
              </span>
            </Link>
            <Link to="/movies/top_rated">
              <span className="font-bjpReg font-semibold text-base dark:text-white">
                Top Rated
              </span>
            </Link>
            <Link to="/movies/upcoming">
              <span className="font-bjpReg font-semibold text-base dark:text-white">
                Upcoming
              </span>
            </Link>
          </div>
          <div className="header-rt">
            <div className="theme-btn">
              <div className={`  flex-col ${darkToggle && "dark"}`}>
                <label className="toggleDarkBtn">
                  <input
                    type="checkbox"
                    onClick={() => setDarkToggle(!darkToggle)}
                  />
                  <span className="slideBtnTg round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

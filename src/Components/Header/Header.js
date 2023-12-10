import React, { useState } from "react";

const Header = ({ setsearch }) => {
  const [Getinput, setGetinput] = useState("?");
  if (Getinput === "") {
    setGetinput("?");
  }

  const handlegetinputval = (e) => {
    e.preventDefault();
    setsearch(Getinput);
    console.log(Getinput);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div
          className="d-flex justify-content-between"
          style={{ width: "900px" }}
        >
          <div className="my-auto">
            <h3 className="text-warning fw-bold">LIST OF UNIVERSITY</h3>
          </div>
          <div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 custom-width-form-control"
                type="text"
                placeholder="Enter Your Country"
                aria-label="Search"
                onChange={(e) => setGetinput(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handlegetinputval}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

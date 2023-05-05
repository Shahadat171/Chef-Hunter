import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .cath((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Rajmohol Restora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/blog">
                  Blog
                  </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Search</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              {user && (
                <div>
                    <Tooltip title={user.displayName}>
                  <span>
                    <img className="rounded-circle w-50" src={user.photoURL} />
                  </span>
                  </Tooltip>
                </div>
              )}
              {user ? (
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="btn btn-dark ms-0"
                >
                  Log Out
                </button>
              ) : (
                <Link className="text-light" to="login">
                  {" "}
                  <button type="button" className="btn btn-dark">
                    {" "}
                    Login{" "}
                  </button>{" "}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

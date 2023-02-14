import React from "react";
import { Link, useNavigate } from "react-router-dom";
interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Navigation: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
  };
  const { setIsLogin } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <div className="navbar-brand text-white">Navbar</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div>
                  <Link className="nav-link active text-white" to={"/"}>
                    List
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <Link className="nav-link text-white" to={"/form"}>
                    Form
                  </Link>
                </div>
              </li>
            </ul>
            <form className="d-flex px-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

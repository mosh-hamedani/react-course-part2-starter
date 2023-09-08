import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          your app
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* NavLink automatically add active class to this element. If I prefer not to use default active, and want to change it to sth more special it is so easy. SO ====> in front od CN I pass a function  CN={({isActive})=> isActive ? 'the class name that I want for example bootstrap uses 'active nav-link' : 'nav-link'}   ==> nav-link class is only because I used Bootstrap*/}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active nav-link " : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

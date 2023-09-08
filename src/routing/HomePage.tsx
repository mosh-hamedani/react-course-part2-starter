import { Link } from "react-router-dom";

const HomePage = () => {
  throw new Error("Something Failed");
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      {/* Anchor element cause refreshing full page reload So instead we want only replace the content in that area. So the page load partially */}
      {/* <a href="/users">Users</a> */}
      <div className="d-flex flex-column">
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </>
  );
};

export default HomePage;

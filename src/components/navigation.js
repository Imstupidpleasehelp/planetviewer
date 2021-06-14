import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <div className="container-fluid navbar">
      <div className="row">
        <NavLink to="/" className="col-sm-4">
          <div className="">left</div>
        </NavLink>
        <NavLink to="/" className="col-sm-4">
          <div className="">middle</div>
        </NavLink>{" "}
        <NavLink to="/" className="col-sm-4">
          <div className="">right</div>
        </NavLink>
      </div>
    </div>
  );
};

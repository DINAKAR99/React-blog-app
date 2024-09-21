// import { Children } from "react";
import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "Welcome to website ", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      {children}
      <h1 className="text-center text-capitalize p-5 bg-dark-subtle">
        This is footer
      </h1>
    </div>
  );
};

export default Base;

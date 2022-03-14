import React from "react";

const homepage = ({ setLoginUser }) => {
  return (
    <div className="d-flex justify-content-center text-center ">
      <div className="border p-5 rounded">
        <div className="p-5">
          <h1 className="h1 ">Hello Here is Home-Page</h1>
          <button
            className="btn btn-outline-danger"
            onClick={() => setLoginUser({})}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default homepage;

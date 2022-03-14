import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Ragistraion from "./components/registration";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App d-flex flex-column bg-dark text-white-50 justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/registraion" element={<Ragistraion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

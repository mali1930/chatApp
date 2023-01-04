import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./Components/SignUp";
import Application from "./pages/Application";
import Home from "./pages/Home";
import { useContext } from "react";
import { Auth } from "./Components/context/Auth";

const App = () => {
  const { currentUser } = useContext(Auth);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  >
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

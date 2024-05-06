import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Places from "./pages/places/Places";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <Layout setIsOpen={setIsOpen} isOpen={isOpen}>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            exact
            path="/places"
            element={
              <Layout setIsOpen={setIsOpen} isOpen={isOpen}>
                <Places />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

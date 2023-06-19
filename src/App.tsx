import React, { Suspense } from "react";
import "./index.scss";

import { AboutPageLazy, MainPageLazy } from "./pages";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

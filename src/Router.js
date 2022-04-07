import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("pages/Views/Home"));
const Example = React.lazy(() => import("pages/Views/Example"));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/reports"
          element={
            <React.Suspense fallback={<>...</>}>
              <Example />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

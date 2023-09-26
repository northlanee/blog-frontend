import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
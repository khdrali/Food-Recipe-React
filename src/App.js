import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/index";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DetailRecipe from "./pages/detail-recipe";
import Register from "./pages/Register";
import Maintenance from "./pages/Maintenance";
import Profile from "./pages/Profile";
import AddRecipe from "./pages/add-recipe";
import Forgot from "./pages/forgot";
import Otp from "./pages/otp";
import Success from "./pages/success";
import ResetPassword from "./pages/reset-password";
import Logout from "./pages/Logout";
import React from "react";

function App() {
  let persistor = persistStore(store);
  const maintenance = ["profile"];
  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "detail-recipe/:id",
      element: <DetailRecipe />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "forgot",
      element: <Forgot />,
    },
    {
      path: "otp",
      element: <Otp />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "success",
      element: <Success />,
    },
    {
      path: "Logout",
      element: <Logout />,
    },
  ]);

  if (isPageMaintenance) {
    return (
      <Maintenance
        maintenanceList={maintenance}
        turnOnMaintenance={() => setIsPageMaintenance(true)}
        turnOffMaintenance={() => setIsPageMaintenance(false)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

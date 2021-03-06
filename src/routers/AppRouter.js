import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { AuthContext } from "../auth/AuthContext";
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              exact
              isAuth={logged}
              path="/login"
              component={LoginScreen}
            />
            <PrivateRoute
              isAuth={logged}
              path="/"
              component={DashboardRoutes}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;

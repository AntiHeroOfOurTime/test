import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthPage} from "../pages/auth";
import {Layout} from "./layout";
import {MainPage} from "../pages/main";
import {routes} from '../utils/routes'
import {ProfilePage} from "../pages/profile";
import {MyDataPage} from "../pages/profile/myData";

export const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route path={routes.main.path} element={<MainPage />} />
              <Route path={routes.auth.path} element={<AuthPage />} />

              <Route path={routes.profile.path} element={<ProfilePage/>}>
                <Route path={routes.myData.path} element={<MyDataPage/>}/>
              </Route>

          </Route>

      </Routes>
  );
}

import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthPage} from "../pages/auth";
import {Layout} from "./layout";
import {MainPage} from "../pages/main";

function App() {
  return (
      <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Layout />}>
              <Route path="/main" element={<MainPage />} />
          </Route>

      </Routes>
  );
}

export default App;

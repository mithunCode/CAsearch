import HomePage from "./pages/HomePage";

import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;

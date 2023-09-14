import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import HomePage from "src/pages/HomePage";
import CatalogPage from "src/pages/CatalogPage";
import FavoritePage from "src/pages/FavoritePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductOverview";
import { DarkModeProvier } from "./context/DarkModeProvider";

function App() {
  return (
    <div className="bg-app-bg min-h-screen">
      <DarkModeProvier>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<ProductPage />} />
        </Routes>
      </DarkModeProvier>
    </div>
  );
}

export default App;

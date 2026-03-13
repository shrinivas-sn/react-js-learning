import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout.jsx";
import HomePage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Pricing from "./pages/Pricing.jsx";
import NotFound from "./pages/PageNotFound.jsx";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="appLayout" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
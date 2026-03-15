import { BrowserRouter, Route, Router, NavLink } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Hello App</h1>
      <BrowserRouter>
        <Router>
         <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

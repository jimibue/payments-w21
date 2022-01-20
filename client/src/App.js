import "./App.css";
import Home from "./pages/Home";
import Public from "./pages/Public";
import Protected from "./pages/Protected";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import RequireAuth from "./components/RequireAuth";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* public routes go here */}
        <Route path="/public" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<RequireAuth />}>
          {/* protected routes go here */}
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

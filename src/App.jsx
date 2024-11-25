import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import ProtectedRout from "./components/protectRout/protectedRouter";
import Home from "./components/home";

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<ProtectedRout Component={Home} />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

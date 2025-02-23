import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home";
import Login from "../login";
import Jobs from "../jobs";
import ProtectedRout from "../protectedRout/protectedRouter";
import NotFound from "../notFound";


const AppRoutes = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRout Component={Home} />} />  
        <Route path="/jobs" element={<ProtectedRout Component={Jobs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

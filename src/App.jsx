import { Routes,Route } from "react-router-dom";
import Home from "./components/home";
import Jobs from "./components/jobs";
import Login from "./components/login";
import NotFound from "./components/notFound";
import ProtectedRout  from "./components/protectedRout/protectedRouter";
import JobListDetails from "./components/jobListDetails";

const App = ()=>(

<Routes>

        <Route path="/" element = {<ProtectedRout Component  = {Home}/>} ></Route>

        <Route path="/login" element = {<ProtectedRout Component  = {Login}/>} ></Route>

        <Route path="/jobs" element = {<ProtectedRout Component  = {Jobs}/>} ></Route>

        <Route path="/jobs/:id" element = {<ProtectedRout Component  = {JobListDetails}/>} ></Route>

        <Route path="/*" element = {<ProtectedRout Component  = {NotFound}/>} ></Route>


</Routes>

)



export default App;
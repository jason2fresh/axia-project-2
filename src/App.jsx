import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import logo from "./assets/logo.png";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgot-password";
import Landingpage from "./pages/Landingpage";
import DashboardHome from "./pages/Dashboard/Dashboardhome";
import Courses from "./pages/Dashboard/Courses";
import Assignment from "./pages/Dashboard/Assignment";
import Profile from "./pages/Dashboard/profile";





function App() {
  return (
    <>
      <div className="centerapp">
        <a href="/"><img className ="logoimg" src={logo} alt="logo" ></img></a>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/landingpage" element={<Landingpage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />

          <Route path="/Dashboard" element={<DashboardHome />} />
          <Route path="/Dashboard/Courses" element={<Courses />} />
          <Route path="/Dashboard/assignment" element={<Assignment />} />
          <Route path= "/Dashboard/profile" element={<Profile />} />
        </Routes>
      
      </div>
      

    </>
  );
}

export default App;

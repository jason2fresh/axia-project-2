import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import logo from "./assets/logo.png";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgot-password";
import Landingpage from "./pages/Landingpage";





function App() {
  return (
    <>
      <div className="centerapp">
        <img className ="logoimg" src={logo} alt="logo"></img>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/landingpage" element={<Landingpage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      
      </div>
      

    </>
  );
}

export default App;

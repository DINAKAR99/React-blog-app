import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Privateroute from "./components/Privateroute";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import Singup from "./pages/Signup";
import Services from "./pages/sevices";
import ProfileInfo from "./pages/user-modules/Profileinfo";
import Userdashboard from "./pages/user-modules/Userdashboard";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route
          path="/"
          element={
            <Base title="Home">
              <Home />
            </Base>
          }
        /> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Singup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<Userdashboard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import axios from "axios";
import { UserContextProvider } from "./userContext";
import HeroSection from "./components/HeroSection";
import HomePage from "./pages/HomePage";
axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true; //for Response Headers
function App() {
  return (
    <UserContextProvider>
      <div className="bg-black-500 text-isabelline-200 font-redHatDisplay px-[80px] ">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/collections" element={<h1>/collections</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;

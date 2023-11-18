import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import axios from "axios";
import { UserContextProvider } from "./userContext";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CollectionProductPage from "./pages/CollectionProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage";
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
              <Route path="/aboutus" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vintage" element={<CollectionProductPage />} />
              <Route path="/luxury" element={<CollectionProductPage />} />
              <Route path="/sport" element={<CollectionProductPage />} />
              <Route path="/dress" element={<CollectionProductPage />} />
              <Route path="/details" element={<ProductDetailsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;

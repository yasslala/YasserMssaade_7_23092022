import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Logement from "./pages/Logement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:logementId" element={<Logement />} />
          <Route path="/page-non-trouvee" element={<Error />} />
          <Route path="*" element={<Navigate to="/page-non-trouvee" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

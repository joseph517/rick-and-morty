import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/headers/Header";
import { Home } from "./components/pages/Home";
import { Personaje } from "./components/pages/Personaje";
import { Footer } from "./components/footer/Footer";
import "./App.css";
import { Personajes } from "./components/pages/Personajes";
import { useState } from "react";
function App() {
  const [dark, setDark] = useState();

  function manejarDark() {
    setDark(!dark);
  }

  return (
    <div>
      <div className={`${dark ? "Dark" : ""} App `}>
        <Header modoDark={dark} dark={manejarDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="personaje/:id" element={<Personaje />} />
          <Route path="personajes" element={<Personajes />} />
        </Routes>
      </div>
      <Footer modoDark={dark} />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { About } from "../shared/components/About";
import { Contact } from "../shared/components/Contact";
import { Tecs } from "../shared/components/Tecs";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Tecs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/*"
        element={
          <main style={{ fontSize: "10rem", textAlign: "center" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

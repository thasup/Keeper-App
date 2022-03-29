import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteScreen from "./screens/NoteScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<NoteScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

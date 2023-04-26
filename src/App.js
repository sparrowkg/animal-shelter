import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import "./index.css"
import { MainPage } from "./pages/main";
import { AboutPage } from "./pages/about";
import { Dog } from "./pages/pets/dogs";
import { Cat } from "./pages/pets/cat";

import { Layout } from "./component/layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}> 
      <Route index element={<MainPage />} />
      <Route path="/dogs" element={<Dog />} />
      <Route path="/cats" element={<Cat />} />
      <Route path="/about" element={<AboutPage />} />  
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

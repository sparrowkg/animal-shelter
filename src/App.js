import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { MainPage } from "./pages/main";
import { AboutPage } from "./pages/about";
import { Layout } from "./component/layout";
import { PetsPage } from "./pages/pets";
import { LoginPage } from "./pages/login";
import { PetsItemPage } from "./pages/pets-item";
import { AdminPetsPage } from "./pages/admin-pets";
import { AdminPetsItemPage } from "./pages/admin-pets-item";
import { NotFoundPage } from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<MainPage />} />
          <Route path="/pets/:type" element={<PetsPage />} />
          <Route path="/pets/:type/:id" element={<PetsItemPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />  
          <Route path="/admin" element={<AdminPetsPage />} />
          <Route path="/admin/:id" element={<AdminPetsItemPage />} />
          <Route path="/admin/new" element={<AdminPetsItemPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

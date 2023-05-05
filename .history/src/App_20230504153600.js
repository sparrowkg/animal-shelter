// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import './App.css';
// import { MainPage } from "./pages/main";
// import { AboutPage } from "./pages/about";
// import { Layout } from "./component/layout";
// import { AdminLayout } from "./component/layout/admin";
// import { PetsPage } from "./pages/pets";
// import { LoginPage } from "./pages/login";
// import PetsItemPage from "./pages/pets-item";
// import { AdminPetsPage } from "./pages/admin-pets";
// import { AdminPetsItemPage } from "./pages/admin-pets-item";
// import { NotFoundPage } from "./pages/not-found";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}> 
//           <Route index element={<MainPage />} />
//           <Route path="/pets/:type" element={<PetsPage />} />
//           <Route path="/pets/:type/:id" element={<PetsItemPage />} />
//           <Route path="/about" element={<AboutPage />} />  
//         </Route>
//         <Route path="/admin" element={<AdminLayout />}> 
//           <Route index element={<AdminPetsPage />} />
//           <Route path="/admin/pets/:type/:id" element={<AdminPetsItemPage />} />
//           <Route path="/admin/pets/:type/new" element={<AdminPetsItemPage />} />
//           <Route path="/admin/login" element={<LoginPage />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage  from "./pages/login";

import AdminPetsPage from './AdminPetsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/pages/admin-pets" component={AdminPetsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Домашняя страница</h1>
      <p>Добро пожаловать на наш сайт!</p>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не найдена.</p>
    </div>
  );
};

export default App;

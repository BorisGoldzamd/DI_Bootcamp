import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import ProfileScreen from './components/ProfileScreen';
import ErrorBoundary from './components/ErrorBoundary'; 
import HomeScreen from './components/HomeScreen';
import PostList from './components/PostList'; // Importa el componente PostList
import SkillList from './components/SkillList'; // Importa el componente SkillList
import ExperienceList from './components/ExperienceList'; // Importa el componente ExperienceList
import jsonData from './data/data.json'; // Importa los datos del archivo JSON data.json
import jsonDataOne from './data/dataone.json'; // Importa los datos del archivo JSON dataone.json

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/posts">Posts</NavLink> {/* Agrega el NavLink para los posts */}
        <NavLink to="/skills">Skills</NavLink> {/* Agrega el NavLink para las habilidades */}
        <NavLink to="/experiences">Experiences</NavLink> {/* Agrega el NavLink para las experiencias */}
      </div>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path='/posts' element={<PostList posts={jsonData} />} /> {/* Agrega la ruta para los posts del archivo data.json */}
          <Route path='/skills' element={<SkillList skills={jsonDataOne.Skills} />} /> {/* Agrega la ruta para las habilidades del archivo dataone.json */}
          <Route path='/experiences' element={<ExperienceList experiences={jsonDataOne.Experiences} />} /> {/* Agrega la ruta para las experiencias del archivo dataone.json */}
          <Route path='*' element={<ErrorBoundary />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

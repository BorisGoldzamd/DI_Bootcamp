import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import ProfileScreen from './components/ProfileScreen';
import ErrorBoundary from './components/ErrorBoundary'; 
import HomeScreen from './components/HomeScreen';
import PostList from './components/PostList'; 
import SkillList from './components/SkillList'; 
import ExperienceList from './components/ExperienceList'; 
import jsonData from './data/data.json'; 
import jsonDataOne from './data/dataone.json'; 
import Exc4 from './components/Exc4';
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/skills">Skills</NavLink> 
        <NavLink to="/experiences">Experiences</NavLink> 
        <NavLink to="/Exc4">Exc4</NavLink> 
      </div>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/Exc4" element={<Exc4 />} />
          <Route path='/posts' element={<PostList posts={jsonData} />} />
          <Route path='/skills' element={<SkillList skills={jsonDataOne.Skills} />} /> 
          <Route path='/experiences' element={<ExperienceList experiences={jsonDataOne.Experiences} />} /> 
          <Route path='*' element={<ErrorBoundary />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

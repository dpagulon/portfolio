import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Services from './src/services';
import SignUpForm from './src/SignUpForm';
import SignInForm from './src/SignInForm';
import Education from './src/education'; 
import Project from './src/project';

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/signup" element={<SignUpForm />} />
                <Route exact path="/signin" element={<SignInForm />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/project" element={<Project />} />
            </Routes>
        </div>
    );
};

export default MainRouter;

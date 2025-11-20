import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Counter from './src/counter'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import EducationForm from './components/EducationForm'
import ProjectForm from './components/ProjectForm'

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/counter" element={<Counter />} />
                <Route exact path="/signup" element={<SignUpForm />} />
                <Route exact path="/signin" element={<SignInForm />} />
                <Route exact path="/education" element={<EducationForm />} />
                <Route exact path="/project" element={<ProjectForm />} />
            </Routes>
        </div>
    )
}
export default MainRouter
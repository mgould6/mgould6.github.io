import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsAndContactPage from './pages/ProjectsAndContactPage';
import './App.css';

function App() {
    return (
        <body>
        <div>
            <Header />
            <HomePage />
            <AboutPage />
                <ProjectsAndContactPage />
                <Footer />

            </div>
        </body>
    );
}

export default App;

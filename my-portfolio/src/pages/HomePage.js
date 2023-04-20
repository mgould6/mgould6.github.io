import React from 'react';

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="intro">
                <h1>Michael J. Gould, III</h1>
                <h2>Web Developer and Software Engineer</h2>
                <p>
                    Adaptable software engineer with a comprehensive background in web development, application support, and software design, excelling in delivering client-centric solutions. Experienced in collaborating with cross-functional teams to develop high-quality, scalable products, I am proficient in troubleshooting, resolving technical challenges, and maintaining software systems.
                </p>
            </section>

            <section className="skills">
                <h3>Technical Proficiencies/Skills</h3>
                <ul>
                    <li>Language: C++, C#, OpenGL, JavaScript, Python, React, Vue, jQuery</li>
                    <li>Program: Unreal Engine, Visual Studio, Microsoft Office</li>
                    <li>Software: MySQL, Git, Jenkins, Teamwork, Azure, AWS</li>
                    <li>Framework: OpenGL, SQL, .NET, WPF, Hubspot, Wordpress</li>
                </ul>
            </section>

            <section className="call-to-action">
                <p>Interested in learning more about my work and projects?</p>
                <button>View Projects</button>
                <button>Contact Me</button>
            </section>
        </div>
    );
};

export default HomePage;

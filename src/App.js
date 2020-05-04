import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

import Resume from './components/Resume';
import Accordion from './components/Accordion';

import raw from 'raw.macro';

import AvatarPhoto from './images/me.jpg';

import 'animate.css';
import './app.scss';

const Sidebar = () => (
    <div className="app__sidebar">
        <div className="app__sidebar__avatar-wrapper">
            <img
                src={AvatarPhoto}
                alt="Elis Offerni"
                className="animated bounce fast"
            />
        </div>

        <div className="app__sidebar__text">
            Hi! I'm
            <h1 className="app__sidebar__text-highlight">Elis Offerni</h1>I love
            cats and coding!
            <p>
                Here you'll find some information about me and my resume for
                viewing and downloading. I'm also on{' '}
                <a
                    href="https://linkedin.com/in/elisofferni"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>{' '}
                and{' '}
                <a
                    href="https://github.com/elisoff"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                .
            </p>
        </div>
    </div>
);

const About = ({ initAsExpanded }) => (
    <Accordion
        title="About me"
        body={<Markdown>{raw('./content/about.md')}</Markdown>}
        initAsExpanded={initAsExpanded}
    />
);

const Footer = () => (
    <div className="footer">
        <p>
            Illustrations by{' '}
            <a
                href="https://icons8.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Icons8
            </a>
        </p>
    </div>
);

const App = () => {
    const [shouldOpenResume, setResumeOpened] = useState(false);

    useEffect(() => {
        const searchQuery = window.location.search;
        const queryParams = new URLSearchParams(searchQuery);

        if (queryParams.has('resume')) {
            const shouldOpenResume = queryParams.get('resume') === 'true';

            setResumeOpened(shouldOpenResume);
        }
    }, []);

    return (
        <>
            <div className="app animated fadeIn">
                <div className="app__bg"></div>

                <Sidebar />
                <div className="app__content">
                    <About initAsExpanded={!shouldOpenResume} />

                    <Resume initAsExpanded={shouldOpenResume} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default App;

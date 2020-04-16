import React from 'react';
import Markdown from 'markdown-to-jsx';

import Resume from './components/Resume';
import Accordion from './components/Accordion';

import raw from 'raw.macro';
import GingerCat759 from './images/ginger-cat-759.png';
import GingerCat735 from './images/ginger-cat-735.png';

import './app.scss';

const Sidebar = () => (
    <div className="app__sidebar">
        <img
            src={GingerCat735}
            alt="Cat with an idea"
            className="app__sidebar__image"
        />

        <div className="app__sidebar__text">
            Hi! I'm
            <div className="app__sidebar__text-highlight">Elis Offerni</div>I
            love cats and coding!
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

const About = () => (
    <Accordion
        title="About me"
        body={<Markdown>{raw('./content/about.md')}</Markdown>}
        initAsExpanded={true}
    />
);

const Footer = () => (
    <div className="footer">
        Illustrations by{' '}
        <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
            Icons8
        </a>
    </div>
);

const App = () => {
    return (
        <>
            <div className="app">
                <Sidebar />
                <div className="app__content">
                    <About />

                    <Resume />
                </div>

                <img
                    src={GingerCat759}
                    alt="Cat working"
                    className="app__bottom-cat"
                />
            </div>
            <Footer />
        </>
    );
};

export default App;

import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import portfolioData from './data/portfolio.json';
import { Portfolio } from './types/portfolio';

const portfolio = portfolioData as Portfolio;

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                document.title = `${portfolio.name} | Portfolio`;
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main portfolio={portfolio} />
            <Expertise title={portfolio.expertiseTitle} items={portfolio.expertise} />
            <Timeline title={portfolio.experienceTitle} items={portfolio.experience} />
            <Project title={portfolio.projectsTitle} items={portfolio.projects} />
            <Contact content={portfolio.contact} />
        </FadeIn>
        <Footer socialLinks={portfolio.socialLinks} />
    </div>
    );
}

export default App;
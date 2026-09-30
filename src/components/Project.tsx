import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import { ProjectItem } from '../types/portfolio';
import resolveImage from '../utils/resolveImage';

const projectImages: Record<string, string> = {
    'mock01.png': mock01,
    'mock02.png': mock02,
    'mock03.png': mock03,
    'mock04.png': mock04,
    'mock05.png': mock05,
    'mock06.png': mock06,
    'mock07.png': mock07,
    'mock08.png': mock08,
    'mock09.png': mock09,
    'mock10.png': mock10,
};

interface ProjectProps {
    title: string;
    items: ProjectItem[];
}

function Project({ title, items }: ProjectProps) {
    return(
    <div className="projects-container" id="projects">
        <h1>{title}</h1>
        <div className="projects-grid">
            {items.map((item) => {
                const image = item.image
                    ? projectImages[item.image] || resolveImage(item.image)
                    : undefined;
                const titleElement = <h2>{item.title}</h2>;

                return (
                    <div className="project" key={item.title}>
                        {image && (item.url ? (
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <img src={image} className="zoom" alt={`${item.title} preview`} width="100%" />
                            </a>
                        ) : (
                            <img src={image} className="zoom" alt={`${item.title} preview`} width="100%" />
                        ))}
                        {item.url ? (
                            <a href={item.url} target="_blank" rel="noreferrer">{titleElement}</a>
                        ) : titleElement}
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default Project;
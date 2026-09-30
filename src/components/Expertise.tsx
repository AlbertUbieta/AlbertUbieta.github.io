import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { ExpertiseItem } from '../types/portfolio';

const skillIcons = { react: faReact, docker: faDocker, python: faPython };

interface ExpertiseProps {
    title: string;
    items: ExpertiseItem[];
}

function Expertise({ title, items }: ExpertiseProps) {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{title}</h1>
            <div className="skills-grid">
                {items.map((item) => (
                    <div className="skill" key={item.title}>
                        {item.icon && <FontAwesomeIcon icon={skillIcons[item.icon]} size="3x" />}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {item.technologies.map((technology) => (
                                <Chip key={technology} className='chip' label={technology} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;
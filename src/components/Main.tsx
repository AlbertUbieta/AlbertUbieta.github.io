import React from "react";
import '../assets/styles/Main.scss';
import { Portfolio } from '../types/portfolio';
import resolveImage from '../utils/resolveImage';

interface MainProps {
  portfolio: Portfolio;
}

function Main({ portfolio }: MainProps) {
  const socialLinks = portfolio.socialLinks.map((link) => (
    <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
  ));

  return (
    <div className="container">
      <div className="about-section">
        {portfolio.profileImage && (
          <div className="image-wrapper">
            <img src={resolveImage(portfolio.profileImage)} alt={`${portfolio.name}`} />
          </div>
        )}
        <div className="content">
          <div className="social_icons">{socialLinks}</div>
          <h1>{portfolio.name}</h1>
          <p>{portfolio.title}</p>

          <div className="mobile_social_icons">
            {socialLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
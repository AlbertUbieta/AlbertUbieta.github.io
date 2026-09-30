import React from "react";
import '../assets/styles/Main.scss';
import { Portfolio } from '../types/portfolio';
import resolveImage from '../utils/resolveImage';
import SocialLinks from "./Social_Icons";

interface MainProps {
  portfolio: Portfolio;
}

function Main({ portfolio }: MainProps) {
  return (
    <div className="container">
      <div className="about-section">
        {portfolio.profileImage && (
          <div className="image-wrapper">
            <img src={resolveImage(portfolio.profileImage)} alt={`${portfolio.name}`} />
          </div>
        )}
        <div className="content">
          <SocialLinks links={portfolio.socialLinks} className="social_icons" />
          <h1>{portfolio.name}</h1>
          <p>{portfolio.title}</p>

          <SocialLinks links={portfolio.socialLinks} className="mobile_social_icons" />
        </div>
      </div>
    </div>
  );
}

export default Main;
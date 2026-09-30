import React from "react";
import '../assets/styles/Footer.scss'
import { SocialLink } from '../types/portfolio';
import SocialLinks  from './Social_Icons';

interface FooterProps {
  socialLinks: SocialLink[];
}

function Footer({ socialLinks }: FooterProps) {
  return (
    <footer>
      <SocialLinks links={socialLinks} className="footer_social_icons" />
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;
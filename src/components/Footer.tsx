import React from "react";
import '../assets/styles/Footer.scss'
import { SocialLink } from '../types/portfolio';

interface FooterProps {
  socialLinks: SocialLink[];
}

function Footer({ socialLinks }: FooterProps) {
  return (
    <footer>
      <div>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
        ))}
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;
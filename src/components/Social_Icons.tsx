import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SocialLink } from "../types/portfolio";

type SocialIconName = NonNullable<SocialLink["icon"]>;

const icons: Record<SocialIconName, React.ReactNode> = {
  github: <GitHubIcon aria-hidden="true" />,
  linkedin: <LinkedInIcon aria-hidden="true" />,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={`${link.label}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
        >
          {link.icon ? icons[link.icon] : link.label}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
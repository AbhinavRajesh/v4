import config from "@/lib/site-config";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", href: config.userData.social.github, icon: Github },
  { name: "LinkedIn", href: config.userData.social.linkedin, icon: Linkedin },
  { name: "Twitter", href: config.userData.social.twitter, icon: Twitter },
  { name: "Email", href: config.userData.social.email, icon: Mail },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
};

export default Socials;

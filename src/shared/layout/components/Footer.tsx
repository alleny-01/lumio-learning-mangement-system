import type { FooterLinkGroup, SocialLink } from "@/landing/types/types";
import Button from "@/landing/components/ui/Button";
import IconLinkButton from "@/landing/components/ui/IconLinkButton";

interface FooterProps {
  linkGroups: FooterLinkGroup[];
  socialLinks: SocialLink[];
}

function Footer({ linkGroups, socialLinks }: FooterProps) {
  return (
    <footer className="bg-surface-container-low/30 pt-24 pb-12 px-6 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="md:col-span-2">
            <a
              className="text-xl font-extrabold tracking-tighter text-on-background mb-6 block"
              href="#"
            >
              Lumio
            </a>
            <p className="text-on-surface-variant max-w-xs leading-relaxed mb-8 text-xs">
              The Digital Atelier for modern minds. Crafting educational
              experiences that empower the next generation of creators.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <IconLinkButton
                  key={link.icon}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-6 text-xs">{group.title}</h4>
              <ul className="space-y-4 text-on-surface-variant text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="hover:text-primary transition-colors text-xs"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-xs">
              Subscribe to our Atelier
            </h4>
            <p className="text-on-surface-variant text-xs mb-4">
              The latest in design, data, and AI delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-surface-container-low text-xs border-none rounded-lg flex-grow px-4 py-2 outline-none placeholder:text-xs"
                placeholder="email@address.com"
                type="email"
              />
              <Button
                variant="dark"
                className="px-4 py-2 rounded-lg text-xs font-semibold"
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label text-on-surface-variant">
          <p>© 2026 Lumio Educational Systems. All rights reserved.</p>
          <div className="flex gap-8 ">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

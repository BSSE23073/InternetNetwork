import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-footer.png";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";
const EMAIL = "support@internetnetwork.us";
const ADDRESS = "3708 Merle Hay Rd, Des Moines, IA 50310";

const footerLinks = {
  services: [
    { href: "/services#internet", label: "Home Internet" },
    { href: "/services#tv", label: "Cable & TV" },
    { href: "/services#bundles", label: "Internet + TV Bundles" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Internet Network"
                className="h-14 w-auto brightness-0 invert dark:brightness-100 dark:invert-0"
              />
            </Link>
            <p className="text-sm text-background/70">
              Your trusted partner for high-speed internet and TV services. 
              Connecting homes and businesses across the nation.
            </p>
            <div className="space-y-2">
              <a href={PHONE_LINK} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <p className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                {ADDRESS}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} Internet Network LLC. All rights reserved.
            </p>
            <p className="text-xs text-background/50">
              Internet Network is an independent marketing partner and is not affiliated with any specific provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

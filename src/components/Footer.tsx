import { motion } from "framer-motion";
import { Github, Linkedin, Package, Heart } from "lucide-react";

const socialLinks = [
<<<<<<< HEAD
  {
    name: "npm",
    icon: Package,
    href: "https://www.npmjs.com/package/jayapremport",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/jayapremv",
=======
  // {
  //   name: "npm",
  //   icon: Package,
  //   href: "https://www.npmjs.com/package/jayapremport",
  // },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/JayapremVeeramuthu",
>>>>>>> 8bbb213 (Initial commit – portfolio builder pro)
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
<<<<<<< HEAD
    href: "https://linkedin.com/in/jayapremv",
=======
    href: "https://www.linkedin.com/in/jayaprem-v-37a34a315/",
>>>>>>> 8bbb213 (Initial commit – portfolio builder pro)
  },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo / Brand */}
          <div className="mb-6">
            <span className="text-2xl font-bold text-gradient">jayapremport</span>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-8 text-lg">
<<<<<<< HEAD
            Build fast. Ship faster.
=======
            Built Easily Your Portfolio
>>>>>>> 8bbb213 (Initial commit – portfolio builder pro)
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            ))}
          </div>
          
          {/* Creator credit */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
<<<<<<< HEAD
            <span>Created with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
=======
            <span>Created</span>
            
>>>>>>> 8bbb213 (Initial commit – portfolio builder pro)
            <span>by</span>
            <a
              href="https://linkedin.com/in/jayapremv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Jayaprem V
            </a>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 text-xs text-muted-foreground">
<<<<<<< HEAD
            © {new Date().getFullYear()} jayapremport. Open source under MIT License.
=======
            © {new Date().getFullYear()} jayapremport
>>>>>>> 8bbb213 (Initial commit – portfolio builder pro)
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

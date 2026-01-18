import { motion } from "framer-motion";
import { 
  Terminal, 
  Zap, 
  Palette, 
  Users, 
  Settings, 
  Clock 
} from "lucide-react";
import { useRef, useEffect } from "react";

const features = [
  {
    icon: Terminal,
    title: "CLI-Based Generator",
    description: "Run a single command and get prompted through the entire setup process.",
  },
  {
    icon: Zap,
    title: "React + Vite Powered",
    description: "Built with modern tools for blazing fast development and production builds.",
  },
  {
    icon: Palette,
    title: "Clean Modern UI",
    description: "Pre-designed with a professional aesthetic that looks great out of the box.",
  },
  {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No prior React knowledge needed. Just answer questions and you're done.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Easily modify the generated config file to update your portfolio anytime.",
  },
  {
    icon: Clock,
    title: "Zero Setup Time",
    description: "Works instantly. No configuration files to create or dependencies to manage.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="premium-card p-7 group"
    >
      <div className="icon-glow w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-all duration-300">
        <feature.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      
      <h3 className="text-lg font-bold mb-2 tracking-tight-custom">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight-custom mb-6">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide-custom">
            Built for developers who want to focus on content, not boilerplate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Features;
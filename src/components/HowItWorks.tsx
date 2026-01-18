import { motion } from "framer-motion";
import { Terminal, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: Terminal,
    step: "01",
    title: "Run the command",
    description: "Open your terminal and run npx jayapremport to get started instantly.",
    code: "npx jayapremport",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Answer questions",
    description: "The CLI will ask for your name, role, skills, email, and more.",
    code: "? Enter your name: John Doe",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch your portfolio",
    description: "Run npm install && npm run dev and your portfolio is live.",
    code: "npm install && npm run dev",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden glass-section">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight-custom mb-6">
            Three Steps to Your Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide-custom">
            No complex setup, no design decisions needed. Just answer a few questions 
            and get a stunning portfolio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
                </div>
              )}
              
              <div className="premium-card p-8 h-full">
                {/* Step number */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-muted/20 select-none">
                  {item.step}
                </span>
                
                {/* Icon with glow */}
                <div className="icon-glow w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight-custom">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                
                {/* Code snippet */}
                <div className="command-highlight">
                  <code className="text-sm text-terminal-cyan">{item.code}</code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default HowItWorks;
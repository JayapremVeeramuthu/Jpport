import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "No complex setup or configuration required",
  "No design decisions to make — looks great by default",
  "Focus on your content, not boilerplate code",
  "Built by a developer, for developers",
  "Modern React + Vite stack you already know",
  "Open source and actively maintained",
];

const WhySection = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
              Why jayapremport?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight-custom mb-6 leading-[1.1]">
              Ship Your Portfolio
              <br />
              <span className="text-gradient-animated">In Minutes</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed tracking-wide-custom">
              Stop spending hours on setup and design. With jayapremport, you answer 
              a few questions and get a production-ready portfolio that you can deploy 
              anywhere.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground tracking-wide-custom">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Decorative code block */}
            <div className="floating-card p-7">
              <div className="font-mono text-sm space-y-2.5">
                <div className="text-muted-foreground">// Your generated portfolio config</div>
                <div>
                  <span className="text-terminal-yellow">const</span>{" "}
                  <span className="text-terminal-cyan">portfolio</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-terminal-green">name</span>:{" "}
                  <span className="text-orange-400">"John Doe"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-terminal-green">role</span>:{" "}
                  <span className="text-orange-400">"Frontend Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-terminal-green">skills</span>: [
                </div>
                <div className="pl-8">
                  <span className="text-orange-400">"React"</span>,{" "}
                  <span className="text-orange-400">"TypeScript"</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-terminal-green">email</span>:{" "}
                  <span className="text-orange-400">"john@example.com"</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-28 h-28 rounded-2xl bg-primary/8 border border-primary/15 backdrop-blur-sm"
            />
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl bg-secondary border border-glass-border backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default WhySection;
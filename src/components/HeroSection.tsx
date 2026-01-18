import { motion, useScroll, useTransform } from "framer-motion";
import { Copy, ExternalLink, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.1]);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx jayapremport");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer background effects */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated grid with parallax */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 hero-grid"
      />
      
      {/* Large radial gradient glow */}
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-[80px]" />
      </motion.div>
      
      {/* Secondary glow orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.2, 0.35, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px] pointer-events-none"
      />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground tracking-wide-custom">Open source CLI tool</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight-custom leading-[0.95] mb-6"
          >
            Generate Your{" "}
            <span className="text-gradient-animated">Portfolio</span>
            <br />
            <span className="text-foreground">in Seconds.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 tracking-wide-custom leading-relaxed"
          >
            jayapremport is a CLI tool that instantly creates a modern React portfolio 
            using a simple command. No setup, no hassle.
          </motion.p>

          {/* Command block - floating effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative inline-flex items-center gap-4 mb-12"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="hero-command flex items-center gap-5"
            >
              <span className="text-terminal-green text-lg">$</span>
              <code className="text-foreground text-base md:text-lg">npx jayapremport</code>
              <button
                onClick={copyCommand}
                className="p-2.5 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                aria-label="Copy command"
              >
                <Copy className={`w-5 h-5 transition-all duration-200 ${copied ? 'text-terminal-green scale-110' : 'text-muted-foreground group-hover:text-primary'}`} />
              </button>
            </motion.div>
            {copied && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -right-24 text-sm text-terminal-green font-medium"
              >
                Copied!
              </motion.span>
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="btn-glow px-8 font-semibold h-12 text-base">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="px-8 gap-2 h-12 text-base border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300">
              <ExternalLink className="w-4 h-4" />
              View on npm
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary" 
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default HeroSection;
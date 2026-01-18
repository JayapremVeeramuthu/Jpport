import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const terminalLines = [
  { type: "command", text: "$ npx jayapremport", delay: 0, typingSpeed: 60 },
  { type: "info", text: "Welcome to jayapremport! 🚀", delay: 1000, typingSpeed: 0 },
  { type: "prompt", text: "? Enter your name:", delay: 1400, typingSpeed: 0 },
  { type: "answer", text: "  John Doe", delay: 2000, typingSpeed: 80 },
  { type: "prompt", text: "? Enter your role:", delay: 2800, typingSpeed: 0 },
  { type: "answer", text: "  Frontend Developer", delay: 3400, typingSpeed: 50 },
  { type: "prompt", text: "? Enter your email:", delay: 4400, typingSpeed: 0 },
  { type: "answer", text: "  john@example.com", delay: 5000, typingSpeed: 40 },
  { type: "prompt", text: "? Enter your skills (comma-separated):", delay: 5800, typingSpeed: 0 },
  { type: "answer", text: "  React, TypeScript, Node.js", delay: 6600, typingSpeed: 45 },
  { type: "success", text: "✓ Portfolio generated successfully!", delay: 7800, typingSpeed: 0 },
  { type: "info", text: "Run: npm install && npm run dev", delay: 8400, typingSpeed: 0 },
];

const TypedText = ({ text, speed, onComplete }: { text: string; speed: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    if (speed === 0) {
      setDisplayedText(text);
      onComplete?.();
      return;
    }
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);
  
  return <>{displayedText}</>;
};

const TerminalDemo = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentTyping, setCurrentTyping] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-150px" });

  useEffect(() => {
    if (!isInView) return;
    
    const timers: NodeJS.Timeout[] = [];
    
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
        if (line.typingSpeed > 0) {
          setCurrentTyping(index);
        }
      }, line.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const getLineClass = (type: string) => {
    switch (type) {
      case "command":
        return "text-terminal-cyan font-semibold";
      case "prompt":
        return "text-terminal-yellow";
      case "answer":
        return "text-foreground";
      case "success":
        return "text-terminal-green font-semibold";
      case "info":
        return "text-muted-foreground";
      default:
        return "text-foreground";
    }
  };

  return (
    <section className="relative py-32 overflow-hidden glass-section">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            See It In Action
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight-custom mb-6">
            Terminal Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide-custom">
            A smooth, intuitive CLI that guides you through every step.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          <div className="floating-card overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-terminal-border bg-gradient-to-b from-secondary/50 to-transparent">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
              </div>
              <span className="text-xs text-muted-foreground ml-4 font-mono tracking-wide">
                ~/projects/my-portfolio
              </span>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-1.5 min-h-[380px] bg-gradient-to-b from-transparent to-background/20">
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className={getLineClass(line.type)}
                >
                  {line.typingSpeed > 0 && currentTyping === index ? (
                    <TypedText 
                      text={line.text} 
                      speed={line.typingSpeed}
                      onComplete={() => setCurrentTyping(-1)}
                    />
                  ) : (
                    line.text
                  )}
                </motion.div>
              ))}
              
              {/* Cursor */}
              {visibleLines < terminalLines.length && (
                <span className="inline-block w-2.5 h-5 bg-primary animate-blink rounded-sm" />
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default TerminalDemo;
import { motion } from "framer-motion";
import { Package, Copy, Shield } from "lucide-react";
import { useState } from "react";

const TrustSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx jayapremport");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-32 overflow-hidden glass-section">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/8 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-terminal-green/10 border border-terminal-green/25 mb-10 backdrop-blur-sm"
          >
            <Shield className="w-4 h-4 text-terminal-green" />
            <span className="text-sm text-terminal-green font-medium tracking-wide">Published & Maintained</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight-custom mb-6">
            Ready to Use on npm
          </h2>
          <p className="text-lg text-muted-foreground mb-12 tracking-wide-custom max-w-xl mx-auto">
            jayapremport is published on npm and actively maintained. 
            Start building your portfolio with confidence.
          </p>

          {/* Package info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block"
          >
            <div className="floating-card p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Package className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold tracking-tight-custom">jayapremport</div>
                  <div className="text-sm text-muted-foreground tracking-wide">npm package</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="command-highlight flex items-center gap-4 flex-1">
                  <span className="text-terminal-green text-lg">$</span>
                  <code className="text-foreground">npx jayapremport</code>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyCommand}
                  className="p-3.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-200 group"
                  aria-label="Copy command"
                >
                  <Copy className={`w-5 h-5 transition-all duration-200 ${copied ? 'text-terminal-green' : 'text-primary'}`} />
                </motion.button>
              </div>
              
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-terminal-green mt-4 font-medium"
                >
                  Copied to clipboard!
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
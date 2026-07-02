import { motion } from "framer-motion";

export function AnimatedBackground({ variant = "hero" }: { variant?: "hero" | "soft" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl animate-blob"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-primary-glow/25 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {variant === "hero" && (
        <>
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute block h-2 w-2 rounded-full bg-white/60"
              style={{
                top: `${(i * 53) % 100}%`,
                left: `${(i * 37) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

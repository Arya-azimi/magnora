"use client";
import { motion } from "framer-motion";

export default function HoverLift({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
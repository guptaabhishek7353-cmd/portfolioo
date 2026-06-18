import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/index.css";

const App = lazy(() => import("./App.jsx"));

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border border-sky-300/20" />
        <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-sky-300 border-r-violet-400" />
        <div className="absolute inset-7 rounded-full bg-accent-gradient opacity-80 blur-md" />
      </div>
    </motion.div>
  );
}

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

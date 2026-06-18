/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#050608",
        charcoal: "#111318",
        frost: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 0 35px rgba(88, 166, 255, 0.28)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 55%, #ec4899 100%)"
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0B0C",
        surface: "#101214",
        elevated: "#15171A",
        border: "#23262A",
        ink: "#E9EBEC",
        muted: "#878D93",
        faint: "#54585C",
        scan: "#9EFF6E",
        amber: "#FFB454",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: 1 }, "50%, 100%": { opacity: 0 } },
        scanline: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" },
        },
        drawbox: {
          "0%": { clipPath: "inset(0 100% 100% 0)" },
          "100%": { clipPath: "inset(0 0% 0% 0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        scanline: "scanline 3s linear infinite",
        drawbox: "drawbox 1.1s ease forwards",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

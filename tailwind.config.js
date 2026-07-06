/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "float-subtle": "floatSubtle 6s ease-in-out infinite",
        "float-delayed-1": "floatSubtle 7s ease-in-out 1s infinite",
        "float-delayed-2": "floatSubtle 8s ease-in-out 2s infinite",
        "float-delayed-3": "floatSubtle 9s ease-in-out 3s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "particle-float": "particleFloat 4s ease-in-out infinite",
      },
      keyframes: {
        floatSubtle: {
          "0%, 100%": {
            transform: "translateY(0px)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(-12px)",
            opacity: "1",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)",
          },
        },
        particleFloat: {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.8",
          },
          "90%": {
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0",
          },
        },
      },
      colors: {
        "tertiary-fixed": "#b2f746",
        "surface-container-high": "#e2e7ff",
        "on-secondary-container": "#006172",
        error: "#ba1a1a",
        "surface-container-low": "#f2f3ff",
        "primary-fixed": "#e2dfff",
        "surface-container-lowest": "#ffffff",
        surface: "#faf8ff",
        "on-primary": "#ffffff",
        primary: "#3525cd",
        "on-error-container": "#93000a",
        "on-secondary-fixed": "#001f26",
        "on-primary-container": "#dad7ff",
        "surface-tint": "#4d44e3",
        tertiary: "#345000",
        "on-tertiary-container": "#abef3e",
        "surface-variant": "#dae2fd",
        "surface-dim": "#d2d9f4",
        secondary: "#00687a",
        outline: "#777587",
        "tertiary-container": "#466a00",
        "secondary-container": "#57dffe",
        "inverse-primary": "#c3c0ff",
        "secondary-fixed-dim": "#4cd7f6",
        "on-background": "#131b2e",
        "error-container": "#ffdad6",
        "on-primary-fixed-variant": "#3323cc",
        "inverse-surface": "#283044",
        "on-surface-variant": "#464555",
        "secondary-fixed": "#acedff",
        "tertiary-fixed-dim": "#98da27",
        "on-tertiary-fixed": "#121f00",
        "on-primary-fixed": "#0f0069",
        "outline-variant": "#c7c4d8",
        "on-tertiary": "#ffffff",
        "primary-fixed-dim": "#c3c0ff",
        "on-tertiary-fixed-variant": "#334f00",
        "on-error": "#ffffff",
        "surface-container-highest": "#dae2fd",
        "on-secondary": "#ffffff",
        "surface-bright": "#faf8ff",
        "primary-container": "#4f46e5",
        "inverse-on-surface": "#eef0ff",
        "on-surface": "#131b2e",
        background: "#faf8ff",
        "surface-container": "#eaedff",
        "on-secondary-fixed-variant": "#004e5c",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        headline: ["Quicksand"],
        body: ["Quicksand"],
        label: ["Quicksand"],
      },
    },
  },
  plugins: [],
};

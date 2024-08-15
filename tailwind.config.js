/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        header: "",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        primary: "#40A3FB",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontFamily: {
      Padauk: ["Padauk", "sans-serif"],
    },
    animation: {
      "pop-up": "pop 1s ease-in-out",
      "slide-left": "left 1s ease-in-out",
      "slide-right": "right 1s ease-in-out",
      "manger-pop-up": "manager 1s ease-in-out",
      "image-pop-up": "image 0.5s ease-in-out",
      "box-pop-up": "box 0.3s ease-in-out",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    keyframes: {
      pop: {
        from: { transform: " translateY(20px)", opacity: " 0.8" },
        to: { transform: "translateY(0px)", opacity: "1" },
      },
      left: {
        from: { transform: "translateX(-20px)", opacity: "0.5" },
        to: { transform: "translateX(0px)", opacity: "1" },
      },
      right: {
        from: { transform: "translateX(20px)", opacity: "0.5" },
        to: { transform: "translateX(0px)", opacity: "1" },
      },
      manager: {
        from: { transform: "translateY(10px)", opacity: "0.5" },
        to: { transform: "translateY(0px)", opacity: "1" },
      },
      image: {
        from: { transform: "scale(0.1)", opacity: "0.5" },
        to: { transform: "scale(1)", opacity: "1" },
      },
      box: {
        from: { transform: "scale(0.1)", opacity: "0.5" },
        to: { transform: "scale(1)", opacity: "1" },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
  },
  plugins: [],
};


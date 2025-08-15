import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Modern SCC Brand Colors
        'slate': {
          950: '#0F0F23',
          900: '#1A1B3A',
          800: '#252644',
          700: '#30314F',
          600: '#3B3C59',
          500: '#464764',
        },
        'indigo': {
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        'purple': {
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        'cyan': {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        'emerald': {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        'amber': {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        'rose': {
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
        },
        // Updated SCC specific colors
        'scc-blue': {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        'tech-cyan': '#00E5FF',
        'electric-blue': '#1E88E5',
        'neon-purple': '#BB86FC',
        'mint-green': '#03DAC6',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.05)",
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)",
          },
        },
        "circuit-flow": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "gradient-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "circuit-flow": "circuit-flow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
      },
      backgroundImage: {
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Cpath d='M30 10v10M30 40v10M10 30h10M40 30h10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'tech-gradient': 'linear-gradient(135deg, #0F0F23 0%, #1A1B3A 30%, #252644 60%, #30314F 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0F0F23 0%, #1A1B3A 25%, #252644 50%, #1A1B3A 75%, #0F0F23 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

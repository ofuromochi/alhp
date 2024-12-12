import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
    theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        h1: [
          "36px",
          {
            lineHeight: "40px",
            fontWeight: "bold",
          },
        ],
        h2: [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "bold",
          },
        ],
        h3: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "bold",
          },
        ],
        p: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "normal",
          },
        ],
        pbold: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "bold",
          },
        ],
        large: [
          "18px",
          {
            lineHeight: "20px",
            fontWeight: "bold",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "normal",
          },
        ],
        small: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "normal",
          },
        ],
        smallbold: [
          "14px",
          {
            lineHeight: "21px",
            fontWeight: "bold",
          },
        ],
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "normal",
          },
        ],
      },
      lineHeight: {
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
      },
      colors: {
        darkblack: "#1e262a",
        slate: {
          50: '#FAF6F0',
          100: '#F0E6D6',
          200: '#E2D1B8',
          300: '#D4B894',
          400: '#C6A676',
          500: '#B89B76',
          600: '#9A7F5C',
          700: '#7C6342',
          800: '#5E4728',
          900: '#402B0E'
        },
        red: {
          50: "#FFF0F0",
          100: "#FFE5E1",
          200: "#FFC1C2",
          300: "#FF9698",
          400: "#FF272C",
          500: "#FB070C",
          600: "#E70106",
          700: "#AF0509",
          800: "#900C0F",
          900: "#4F0002",
        },
        blue: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        green: {
          50: "#F4FAFA",
          100: "#E8F5F3",
          200: "#D6EEEB",
          300: "#C5E6E2",
          400: "#B3DED9",
          500: "#A7D8D4",
          600: "#8BC1BB",
          700: "#6FA9A3",
          800: "#53918B",
          900: "#376A65"
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
          50: "#F2FDFA",
          100: "#D9FFE6",
          200: "#B6FCCF",
          300: "#7EF7A9",
          400: "#3EEA7C",
          500: "#14C855",
          600: "#0BAE46",
          700: "#0C893A",
          800: "#106B31",
          900: "#0F582B",
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
        // app color
        color: {
          background: "hsl(var(--color-background))",
          foreground: "hsl(var(--color-foreground))",
          muted: {
            background: "hsl(var(--color-muted-background))",
            foreground: "hsl(var(--color-muted-foreground))",
          },
          accent: {
            background: "hsl(var(--color-accent-background))",
          },
          border: "hsl(var(--color-border))",
          navigation: {
            background: "hsl(var(--color-navigation-background))",
            foreground: "hsl(var(--color-navigation-foreground))",
            hover: "hsl(var(--color-navigation-hover))",
            active: "hsl(var(--color-navigation-active))",
          },
          table: {
            header: {
              foreground: "hsl(var(--color-table-header-foreground))",
            },
            background: {
              DEFAULT: "hsl(var(--color-table-background))",
              hover: "hsl(var(--color-table-background-hover))",
            },
          },
          button: {
            foreground: {
              normal: "hsl(var(--color-button-foreground-normal))",
              disable: "hsl(var(--color-button-foreground-disable))",
            },
            background: {
              disable: "hsl(var(--color-button-background-disable))",
            },
            solid: {
              primary: {
                background: {
                  normal:
                    "hsl(var(--color-button-solid-primary-background-normal))",
                  hover:
                    "hsl(var(--color-button-solid-primary-background-hover))",
                  disable:
                    "hsl(var(--color-button-solid-primary-background-desable))",
                },
              },
            },
            ghost: {
              background: {
                hover: "hsl(var(--color-button-ghost-background-hover))",
              },
            },
            subtle: {
              background: {
                normal: "hsl(var(--color-button-subtle-background-normal))",
                hover: "hsl(var(--color-button-subtle-background-hover))",
              },
            },
          },
          success: {
            step10: "hsl(var(--color-success-step10))",
            step8: "hsl(var(--color-success-step8))",
            step7: "hsl(var(--color-success-step7))",
            step2: "hsl(var(--color-success-step2))",
            step1: "hsl(var(--color-success-step1))",
          },
          destructive: {
            step10: "hsl(var(--color-destructive-step10))",
            step8: "hsl(var(--color-destructive-step8))",
            step7: "hsl(var(--color-destructive-step7))",
            step6: "hsl(var(--color-destructive-step6))",
            step2: "hsl(var(--color-destructive-step2))",
            step1: "hsl(var(--color-destructive-step1))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;

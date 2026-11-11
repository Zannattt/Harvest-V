import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/noto-sans-bengali/bengali-400.css";
import "@fontsource/noto-sans-bengali/bengali-500.css";
import "@fontsource/noto-sans-bengali/bengali-600.css";
import "./globals.css";
import "./figma-pages.css";
import "./figma-responsive.css";

export const metadata: Metadata = {
  title: "HarvestV — Plan your next crop with confidence",
  description: "A simpler way to explore seasonal crop rotations for your farm in Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

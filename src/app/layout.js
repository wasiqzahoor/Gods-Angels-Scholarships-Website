import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Gods Angels Scholarships",
  description: "Professional scholarship and education platform",
  icons: {
    icon: '/logo.ico', // Yahan apni file ka naam do
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/styles/main.css";
import BootStrapClient from '@/components/BootStrapClient';
import Header from "./ui/header/header.html";
import Footer from "./ui/footer/footer.html";
import Nav from "./ui/nav/nav.html";

export const metadata: Metadata = {
  title: "Me deben y les debo: La app de las cuentas claras.",
  description: "By AtomoSoluciones.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
      <Nav />
        {children}
        <BootStrapClient />
      <Footer />
      </body>
    </html>
  );
}

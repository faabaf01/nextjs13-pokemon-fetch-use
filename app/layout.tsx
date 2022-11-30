import './globals.css'
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

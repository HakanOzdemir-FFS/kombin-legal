import type { Metadata, Viewport } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://kombin-legal2.vercel.app"),
  title: 'Outfit Assistant | Legal Docs',
  description: 'Official Privacy Policy and Terms of Service for the Outfit Assistant mobile application.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Outfit Assistant. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
